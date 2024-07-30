import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";
import { Context } from "./components/Context";

function App() {
  return (
    <Context>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <Form />
          <Table />
        </div>
      </main>
    </Context>
  );
}

export default App;
