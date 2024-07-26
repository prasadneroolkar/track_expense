import React, { useState } from "react";

const ContextMenu = ({ menuPosition }) => {
  return (
    <div
      className="context-menu"
      style={{ top: menuPosition.y, left: menuPosition.x }}
    >
      <div>Edit</div>
      <div>Delete</div>
    </div>
  );
};

export default ContextMenu;
