const GroupDetails = ({ group }) => {
  if (!group) {
    return null
  }

  const totalPlaces = group.nb_members + group.remaining_places

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
    </section>
  )
}

export default GroupDetails