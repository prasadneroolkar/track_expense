import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    localStorage.setItem("storeItems", JSON.stringify(items));
  }, [items]);

  const addValue = (title, cat, amt) => {
    console.log(`added : ${title}, ${cat}, ${amt}`);
    const newArray = [...items, { title, cat, amt }];
    SetItems(newArray);
    console.log(newArray);
  };

  const delValue = (id) => {
    console.log(`deleted: ${id}`);
  };

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <Form onHandleAdd={addValue} />
          <Table itemsAdded={items} onHandleDel={delValue} />
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
