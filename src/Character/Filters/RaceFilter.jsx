function RaceFilter({ races, selectedRaces, setSelectedRaces }) {

  const toggle = (value) => {
    if (selectedRaces.includes(value)) {
      setSelectedRaces(selectedRaces.filter(v => v !== value));
    } else {
      setSelectedRaces([...selectedRaces, value]);
    }
  };

  return (
    <div className="filter-block">
      <p className="filter-title">Races :</p>

      {races.map((r) => (
        <label key={r} className="filter-option">
          <input
            type="checkbox"
            checked={selectedRaces.includes(r)}
            onChange={() => toggle(r)}
          />
          {r}
        </label>
      ))}
    </div>
  );
}

export default RaceFilter;
