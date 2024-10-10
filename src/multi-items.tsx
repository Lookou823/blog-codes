import React from "react";
import { nanoid } from "nanoid";

const liItems = Array.from({ length: 1000 }, (_, i) => ({
  key: nanoid(),
  message: "这是一段展示信息",
}));

console.log("liItems", liItems);
function MultiItems() {
  return (
    <ul>
      {liItems.map((item) => (
        <li
          key={item.key}
          data-key={item.key}
          onClick={() => {
            alert(`${item.key}:${item.message}`);
          }}
        >
          {item.message}
        </li>
      ))}
    </ul>
  );
}

export default MultiItems;
