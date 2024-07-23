const Input = ({ lable, value, onChange, type = "text" }) => {
  return (
    <>
      <div className="input-container">
        <label htmlFor="title">{lable}</label>
        <input type={type} id="title" value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default Input;
