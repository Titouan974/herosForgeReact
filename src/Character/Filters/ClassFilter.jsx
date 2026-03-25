function ClassFilter({ classes, selectedClasses, setSelectedClasses }) {

  const toggle = (value) => {
    if (selectedClasses.includes(value)) {
      setSelectedClasses(selectedClasses.filter(v => v !== value));
    } else {
      setSelectedClasses([...selectedClasses, value]);
    }
  };

  return (
    <div className="filter-block">
      <p className="filter-title">Classes :</p>

      {classes.map((c) => (
        <label key={c} className="filter-option">
          <input
            type="checkbox"
            checked={selectedClasses.includes(c)}
            onChange={() => toggle(c)}
          />
          {c}
        </label>
      ))}
    </div>
  );
}

export default ClassFilter;
