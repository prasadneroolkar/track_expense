import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";
import { useState } from "react";

function App() {
  const [items, SetItems] = useState([]);

  const addValue = (title, cat, amt) => {
    console.log(`added : ${title}, ${cat}, ${amt}`);
    const newArray = [...items, title, cat, amt];
    SetItems(newArray);
    console.log(newArray);
  };
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <Form onHandleAdd={addValue} />
          <Table itemsAdded={items} />
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
