interface Person {
    name: string,
    imageId: string
}

function getImageUrl(person: Person, size = 's') {
    return (
        'https://i.imgur.com/' + 
        person.imageId +
        size +
        '.jpg'
    )
}

export default function Avatar({person, size}: {person: Person, size: number}) {
    return (
      <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    );
  }
  