import './groups.css'

const GroupCard = ({ group, onSelect }) => (
  <button type="button" className="group" onClick={() => onSelect(group)}>
    <div className="group-content">
      <h2 className="group-name">{group.nom}</h2>

      <div className="group-info">
        <p><strong>Nombre de membres :</strong> {group.nb_members}</p>
        <p><strong>Places restantes :</strong> {group.remaining_places}</p>
      </div>
    </div>
  </button>
)

export default GroupCard