import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";

function App() {
  const addValue = (tittle, cat, amt) => {
    console.log(`added : ${tittle}, ${cat}, ${amt}`);
  };

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <Form onHandleAdd={addValue} />
          <Table />
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
