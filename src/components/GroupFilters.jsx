import { useState } from 'react'
import './GroupFilters.css'

const GroupFilters = ({ groups, children }) => {
  const [onlyAvailableGroups, setOnlyAvailableGroups] = useState(false)

  const filteredGroups = onlyAvailableGroups
    ? groups.filter((group) => Number(group.remaining_places) > 0)
    : groups

  return (
    <>
      <details className="group-filters">
        <summary className="group-filters-summary">Filtrage des groupes</summary>

        <label className="group-filters-option">
          <input
            type="checkbox"
            checked={onlyAvailableGroups}
            onChange={(event) => setOnlyAvailableGroups(event.target.checked)}
          />
          Afficher seulement les groupes avec des places libres
        </label>
      </details>

      {children(filteredGroups)}
    </>
  )
}

export default GroupFilters
