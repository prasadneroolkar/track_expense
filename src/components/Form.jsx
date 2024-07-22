import Input from "./Input";
import Select from "./Select";
import { useEffect, useState } from "react";

const Form = ({ onHandleAdd }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const catArry = [
    "Select",
    "Grocery",
    "Clothes",
    "Bills",
    "Education",
    "Medicine",
  ];
  const [category, setCategory] = useState("Select");
  // console.log(category);

  const onSelect = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    onHandleAdd(title, category, amount);
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleAdd}>
        <div className="input-container">
          <Input
            lable={"Title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Select
            value={category}
            onChange={onSelect}
            arryCat={catArry}
            label={"Category"}
          />
          <Input
            lable={"Amount"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="add-btn">Add</button>
      </form>
    </>
  );
};

export default Form;
