import Input from "./Input";
import Select from "./Select";
import { useEffect, useState } from "react";

const Form = ({
  onHandleAdd,
  editItem,
  parentArray,
  iniCat,
  setCat,
  onChangeSel,
}) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // console.log(category);

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title || "");
      setAmount(editItem.amt || "Select");
      setCat(editItem.cat || "");
    } else {
      setTitle("");
      setCat("Select");
      setAmount("");
    }
  }, [editItem]);

  // const onSelect = (e) => {
  //   setCat(e.target.value);
  //   console.log(e.target.value);
  // };

  const handleAdd = (event) => {
    event.preventDefault();
    onHandleAdd(title, iniCat, amount);

    setTitle("");
    setCat("Select");
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
            value={iniCat}
            onChange={onChangeSel}
            arryCat={parentArray}
            label={"Category"}
          />
          <Input
            lable={"Amount"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            // type="number"
          />
        </div>

        <button className="add-btn">{editItem ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default Form;
