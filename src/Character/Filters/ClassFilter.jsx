function ClassFilter({ classes, selectedClasses, setSelectedClasses }) {

  const toggle = (value) => {
    if (selectedClasses.includes(value)) {
      setSelectedClasses(selectedClasses.filter(v => v !== value));
    } else {
      setSelectedClasses([...selectedClasses, value]);
    }
  };

  return (
    <div className="dropdown">
      <p>Classes :</p>
      {classes.map((c) => (
        <label key={c}>
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