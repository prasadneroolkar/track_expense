const Input = ({ lable, value, onChange }) => {
  return (
    <>
      <div className="input-container">
        <label htmlFor="title">{lable}</label>
        <input type="text" id="title" value={value} onChange={onChange} />
      </div>
    </>
  );
};

export default Input;
