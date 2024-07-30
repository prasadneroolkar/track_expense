import Select from "./Select";
import { useEffect, useState, useContext } from "react";
import contextCreate from "../components/Context";
import ContextMenu from "../components/ContextMenu";

const Table = () => {
  const {
    items,
    delValue,
    editValue,
    catArry,
    onTableSelectChange,
    tableCategory,
  } = useContext(contextCreate);

  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedItem, setSelectedItem] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortItems = (items, order) => {
    return items.sort((a, b) => {
      return order === "desc" ? b.amt - a.amt : a.amt - b.amt;
    });
  };

  useEffect(() => {
    const filtered =
      tableCategory === "All"
        ? items
        : items.filter((item) => item.cat === tableCategory);

    setFilteredItems(sortItems(filtered, sortOrder)); // Default to ascending sort
  }, [tableCategory, items, sortOrder]);

  const onDelete = (index) => {
    delValue(index);
  };
  const onEdit = (id, title, cat, amt) => {
    editValue(id, title, cat, amt);
  };

  const handleEdit = () => {
    // console.log("handle edit", selectedItem);

    if (selectedItem) {
      // console.log("handle edit", selectedItem);
      onEdit(
        selectedItem.id,
        selectedItem.title,
        selectedItem.cat,
        selectedItem.amt
      ); // Call the edit function with the selected item's details
      setShowMenu(false); // Hide the context menu
    }
  };

  const handleDelete = () => {
    if (selectedItem) {
      onDelete(selectedItem.id); // Call the delete function with the selected item's ID
      setShowMenu(false); // Hide the context menu
    }
  };

  const handleContextMenu = (e, item) => {
    e.preventDefault();
    setMenuPosition({ x: e.clientX, y: e.clientY });
    setSelectedItem(item);

    setShowMenu(true);
    // console.log(`onhandle:${showMenu}`);
  };

  const handleClick = () => {
    setShowMenu(false);
    // console.log(`onclick:${showMenu}`);
  };

  const handleDes = () => {
    setSortOrder("desc");
    setFilteredItems(sortItems([...filteredItems], "desc"));
  };

  const handleAsc = () => {
    setSortOrder("asc");
    setFilteredItems(sortItems([...filteredItems], "asc"));
  };

  return (
    <div onClick={handleClick}>
      {showMenu && (
        <ContextMenu
          menuPosition={menuPosition}
          contextEdit={handleEdit}
          contextDel={handleDelete}
        />
      )}
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <Select
                value={tableCategory}
                onChange={onTableSelectChange}
                arryCat={catArry}
              />
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
                  onClick={handleDes}
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow up-arrow"
                >
                  <title>Ascending</title>
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  viewBox="0 0 384 512"
                  className="arrow down-arrow"
                  onClick={handleAsc}
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((elem) => {
            // console.log(items);
            return (
              <>
                <tr
                  key={elem.id}
                  onContextMenu={(e) => handleContextMenu(e, elem)}
                >
                  <td>{elem.title}</td>
                  <td>{elem.cat}</td>
                  <td>{`₹ ${elem.amt}`}</td>

                  <td>{elem.message}</td>
                </tr>
              </>
            );
          })}

          <tr>
            <th>Total</th>
            <th></th>

            <th>
              ₹
              {filteredItems.reduce(
                (total, elem) => total + Number(elem.amt),
                0
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
