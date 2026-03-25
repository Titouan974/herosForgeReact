import { useEffect, useState } from 'react'
import { API_BASE_URL } from './api/config'
import GroupFilters from './components/GroupFilters'
import GroupDetails from './components/GroupDetails'
import './groups.css'

const GroupCard = ({ group, onSelect, isSelected }) => (
  <button
    type="button"
    className={`group ${isSelected ? 'group-selected' : ''}`}
    onClick={() => onSelect(group)}
  >
    <div className="group-content">
      <h2 className="group-name">{group.nom}</h2>

      <div className="group-info">
        <p><strong>Nombre de membres :</strong> {group.nb_members}</p>
        <p><strong>Places restantes :</strong> {group.remaining_places}</p>
      </div>
    </div>
  </button>
)

function GroupsPage() {
  const [groups, setGroups] = useState([])
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [selectedGroupDetails, setSelectedGroupDetails] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/v1/groups`)
        if (!response.ok) {
          throw new Error('Erreur reseau')
        }

        const data = await response.json()
        setGroups(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGroups()
  }, [])

  const handleSelectGroup = async (group) => {
    setSelectedGroup(group)
    setSelectedGroupDetails(null)

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/groups/${group.id}`)
      if (!response.ok) {
        return
      }

      const data = await response.json()
      setSelectedGroupDetails(data)
    } catch {
      // Ignore detail fetch errors and keep basic selected group data.
    }
  }

  if (loading) return <p>Chargement...</p>
  if (error) return <p>Erreur : {error}</p>

  return (
    <GroupFilters groups={groups}>
      {(filteredGroups) => (
        <div className="groups-page-content">
          <div className="groups-list">
            {filteredGroups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                onSelect={handleSelectGroup}
                isSelected={selectedGroup?.id === group.id}
              />
            ))}
          </div>

          <GroupDetails group={selectedGroupDetails || selectedGroup} />
        </div>
      )}
    </GroupFilters>
  )
}

export default GroupsPage