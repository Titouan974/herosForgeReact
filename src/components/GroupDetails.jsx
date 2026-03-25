import { Link } from 'react-router-dom'

const GroupDetails = ({ group }) => {
  if (!group) {
    return null
  }

  const totalPlaces = group.nb_members + group.remaining_places
  const rawMembers = group.members || group.characters || group.personnages || []

  const members = rawMembers
    .map((member) => {
      const character = member.character || member
      return {
        id: character.id,
        name: character.name || character.nom,
      }
    })
    .filter((member) => member.id != null && member.name)

  return (
    <section
      style={{
        marginTop: '20px',
        padding: '16px',
        borderRadius: '12px',
        background: '#1f1f2e',
        color: '#ffffff',
      }}
    >
      <h2 style={{ marginTop: 0, color: '#ffd700' }}>
        Detail du groupe
      </h2>
      <p><strong>Nom :</strong> {group.nom}</p>
      <p><strong>Description :</strong> {group.description}</p>
      <p><strong>Places :</strong> {totalPlaces}</p>

      <h3 style={{ marginBottom: '8px' }}>Membres</h3>
      {members.length > 0 ? (
        <ul style={{ marginTop: 0, paddingLeft: '20px' }}>
          {members.map((member) => (
            <li key={member.id}>
              <Link to={`/characters/${member.id}`} style={{ color: '#ffd700' }}>
                {member.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun membre dans ce groupe.</p>
      )}
    </section>
  )
}

export default GroupDetails