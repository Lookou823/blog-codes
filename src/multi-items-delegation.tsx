import React from "react";
import { nanoid } from "nanoid";

const liItems = Array.from({ length: 1000 }, (_, i) => ({
  key: nanoid(),
  message: "这是一段展示信息【手动事件委托】",
}));

// console.log("liItems", liItems);

function MultiItemsDelegation() {
  return (
    <ul
      onClick={(e) => {
        // 检查事件目标是否是li元素
        if (e.target) {
          if (e.target.tagName === "LI") {
            // 获取li元素的key属性
            const key = e.target.getAttribute("data-key"); // 注意：我们使用了data-key来存储key
            // 获取li元素的子元素，即文本内容
            const children = e.target.textContent;
            alert(`${key}:${children}`);
          }
        }
      }}
    >
      {liItems.map((item) => (
        <li key={item.key} data-key={item.key}>
          {item.message}
        </li>
      ))}
    </ul>
  );
}

export default MultiItemsDelegation;
