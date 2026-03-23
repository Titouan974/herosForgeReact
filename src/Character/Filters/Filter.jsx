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
  setSelectedRaces,
  sortBy,
  setSortBy,
  order,
  setOrder
}) {
  return (
    <>
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

      <div className="sort">
        <p>Trier par :</p>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Nom</option>
          <option value="level">Niveau</option>
          <option value="both">Nom + Niveau</option>
        </select>

        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="asc">Croissant / A-Z</option>
          <option value="desc">Décroissant / Z-A</option>
        </select>
      </div>
    </>
  );
}

export default Filters;