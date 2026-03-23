import './App.css'
import { useState } from 'react'
import GroupCard from './groups'
import GroupFilters from './components/GroupFilters'
import GroupDetails from './components/GroupDetails'

const GROUPS = [
  {
    id: 1,
    nom: 'Groupe 1',
    description: 'Escouade orientee exploration et entraide debutant.',
    nb_members: 5,
    remaining_places: 2,
  },
  {
    id: 2,
    nom: 'Groupe 2',
    description: 'Groupe avance axe sur les missions competitives.',
    nb_members: 6,
    remaining_places: 0,
  },
  {
    id: 3,
    nom: 'Groupe 3',
    description: 'Equipe polyvalente pour quetes quotidiennes en soiree.',
    nb_members: 3,
    remaining_places: 3,
  },
  {
    id: 4,
    nom: 'Groupe 4',
    description: 'Cellule tactique reservee aux strategies de raid.',
    nb_members: 4,
    remaining_places: 0,
  },
]

function App() {
  const [selectedGroup, setSelectedGroup] = useState(null)

  return (
    <main style={{ padding: '20px' }}>
      <GroupFilters groups={GROUPS}>
        {(displayedGroups) => (
          <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {displayedGroups.map((group) => (
                <GroupCard
                  key={group.id}
                  group={group}
                  onSelect={setSelectedGroup}
                  isSelected={selectedGroup?.id === group.id}
                />
              ))}
            </div>

            <GroupDetails group={selectedGroup} />

            {displayedGroups.length === 0 && (
              <p style={{ marginTop: '16px', color: '#ffffff' }}>
                Aucun groupe avec des places libres.
              </p>
            )}
          </>
        )}
      </GroupFilters>
    </main>
  )
}

export default App