import ClassFilter from "./ClassFilter";
import RaceFilter from "./RaceFilter";

function Filters({
  searchNames,
  setSearchNames,
  bannedNames,
  setBannedNames,
  classes,
  races,
  selectedClasses,
  setSelectedClasses,
  selectedRaces,
  setSelectedRaces
}) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Rechercher noms (virgule)"
        value={searchNames}
        onChange={(e) => setSearchNames(e.target.value)}
      />

      <input
        type="text"
        placeholder="Noms bannis (virgule)"
        value={bannedNames}
        onChange={(e) => setBannedNames(e.target.value)}
      />

      <ClassFilter
        classes={classes}
        selectedClasses={selectedClasses}
        setSelectedClasses={setSelectedClasses}
      />

      <RaceFilter
        races={races}
        selectedRaces={selectedRaces}
        setSelectedRaces={setSelectedRaces}
      />
    </div>
  );
}

export default Filters;