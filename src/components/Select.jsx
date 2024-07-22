const Select = ({ onChange, arryCat, value, label }) => {
  return (
    <>
      <label htmlFor="category">{label}</label>
      <select id="category" onChange={onChange} value={value}>
        {arryCat.map((elem, index) => (
          <option key={index} value={elem}>
            {elem}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
