import Profile from "./Profile"

export default function Profiles () {
  const profile1 = {
    name: 'Katsuko Saruhashi',
    imageId: 'YfeOqp2',
    profession: 'geochemist',
    awards: [
      'Miyake Prize for geochemistry',
      'Tanaka Prize'
    ],
    discovered: 'a method for measuring carbon dioxide in seawater'
  }

  const profile2 = {
    name: 'Maria Skłodowska-Curie',
    imageId: 'szV5sdG',
    profession: 'physicist and chemist',
    awards: [
      'Nobel Prize in Physics',
      'Nobel Prize in Chemistry',
      'Davy Medal',
      'Matteucci Medal'
    ],
    discovered: 'polonium (chemical element)'
  }
  return (
    <>
      <Profile {...profile1}/>
      <Profile {...profile2}/>
    </>
  )
}