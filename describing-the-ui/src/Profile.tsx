import Avatar from "./Avatar";

interface Information {
    name: string,
    imageId: string,
    profession: string,
    awards: string[],
    discovered: string
}

export default function Profile(information: Information) {
    return (
        <section className="profile">
            <h2>{information.name}</h2>
            <Avatar
            size={100}
            person={{ 
            name: information.name, 
            imageId: information.imageId,
            }}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {information.profession}
                </li>
                <li>
                    <b>Awards: {information.awards.length} </b>
                    ({information.awards.join(', ')})
                </li>
                <li>
                    <b>Discorvered: </b>
                    {information.discovered}
                </li>
            </ul>
        </section>
    )
}