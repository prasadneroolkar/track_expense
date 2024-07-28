import React, { useState } from "react";
import Select from "./Select";
import ContextMenu from "./ContextMenu";

const Table = ({
  itemsAdded,
  onHandleDel,
  onHandleEdit,
  iniCat,
  onChangeSel,
  parentArray,
}) => {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedItem, setSelectedItem] = useState(null); // State to store the currently selected item
  const [showMenu, setShowMenu] = useState(false);
  // const [selcategory, setSelCat] = useState("All");

  const onDelete = (index) => {
    onHandleDel(index);
  };
  const onEdit = (id, title, cat, amt) => {
    onHandleEdit(id, title, cat, amt);
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
                value={iniCat}
                onChange={onChangeSel}
                arryCat={parentArray}
              />
              {/* <select>
                <option value="">All</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select> */}
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
                <svg
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
                >
                  <title>Descending</title>
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {itemsAdded.map((elem, index) => (
            <>
              <tr key={index} onContextMenu={(e) => handleContextMenu(e, elem)}>
                <td>{elem.title}</td>
                <td>{elem.cat}</td>
                <td>{`₹ ${elem.amt}`}</td>

                <td>{elem.message}</td>
              </tr>
            </>
          ))}

          <tr>
            <th>Total</th>
            <th></th>

            <th>
              ₹{itemsAdded.reduce((total, elem) => total + Number(elem.amt), 0)}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
