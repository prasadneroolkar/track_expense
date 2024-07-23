import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const getLocalItem = () => {
    let list = JSON.parse(localStorage.getItem("storeItems"));
    if (list) {
      return list;
    } else {
      return [];
    }
  };
  const [items, SetItems] = useState(getLocalItem());

  const [editItems, setEdititems] = useState(null);

  useEffect(() => {
    localStorage.setItem("storeItems", JSON.stringify(items));
  }, [items]);

  const addValue = (title, cat, amt) => {
    console.log(`added : ${title}, ${cat}, ${amt}`);
    const newArray = [...items, { id: uuidv4(), title, cat, amt }];
    SetItems(newArray);
    console.log(newArray);
  };

  const delValue = (ide) => {
    console.log(`deleted: ${ide}`);
    const deletedItems = items.filter((val) => val.id !== ide);
    SetItems(deletedItems);
  };

  const editValue = (id, title, cat, amt) => {
    console.log(`edit value: ${id}, ${title}, ${cat}, ${amt}`);
    const editArray = { id: uuidv4(), title, cat, amt };
    setEdititems(editArray);
  };

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <Form onHandleAdd={addValue} editItem={editItems} />
          <Table
            itemsAdded={items}
            onHandleDel={delValue}
            onHandleEdit={editValue}
          />
          <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
