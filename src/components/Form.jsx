import Input from "./Input";
import Select from "./Select";
import { useEffect, useState, useContext } from "react";
import contextCreate from "../components/Context";

const Form = () => {
  const {
    addValue,
    catArry,
    editItems,
    category,
    setCategory,
    onSelectChange,
  } = useContext(contextCreate);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // console.log(category);

  useEffect(() => {
    if (editItems) {
      setTitle(editItems.title || "");
      setAmount(editItems.amt || "Select");
      setCategory(editItems.cat || "");
    } else {
      setTitle("");
      setCategory("Select");
      setAmount("");
    }
  }, [editItems]);

  const handleAdd = (event) => {
    event.preventDefault();
    addValue(title, category, amount);

    setTitle("");
    setCategory("Select");
    setAmount("");
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
            onChange={onSelectChange}
            arryCat={catArry}
            label={"Category"}
          />
          <Input
            lable={"Amount"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            // type="number"
          />
        </div>

        <button className="add-btn">{editItems ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default Form;
