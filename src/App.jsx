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
    if (editItems) {
      const updated = items.map((item) =>
        item.id === editItems.id
          ? {
              ...item,
              title,
              cat,
              amt,
              message: "Record updated successfully",
              timestamp: Date.now(),
            }
          : item
      );
      SetItems(updated);

      setEdititems(null);
    } else {
      // console.log(`added : ${title}, ${cat}, ${amt}`);
      const newArray = [...items, { id: uuidv4(), title, cat, amt }];
      SetItems(newArray);
      console.log(newArray);
    }
  };

  const delValue = (ide) => {
    // console.log(`deleted: ${ide}`);
    const deletedItems = items.filter((val) => val.id !== ide);
    SetItems(deletedItems);
    console.log(deletedItems);
  };

  const editValue = (ide) => {
    const editArray = items.find((ele) => {
      return ele.id === ide;
    });
    setEdititems(editArray);
    console.log(editArray);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      const updatedItems = items.map((item) => {
        if (item.message && Date.now() - item.timestamp > 5000) {
          return { ...item, message: "" };
        }
        return item;
      });
      SetItems(updatedItems);
    }, 1000);

    return () => clearInterval(timer);
  }, [items]);

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
