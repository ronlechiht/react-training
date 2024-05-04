export function getImageUrl(person: {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
}) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }