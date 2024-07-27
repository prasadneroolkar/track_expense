import React, { useState } from "react";

const ContextMenu = ({ menuPosition, contextEdit, contextDel }) => {
  return (
    <div
      className="context-menu"
      style={{ top: menuPosition.y, left: menuPosition.x }}
    >
      <div onClick={contextEdit}>Edit</div>
      <div onClick={contextDel}>Delete</div>
    </div>
  );
};

export default ContextMenu;
