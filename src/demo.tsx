import React, { useEffect } from "react";
import { Button, Space, Card } from "antd";
function Demo() {
  useEffect(() => {
    function handleDocumentClick(e) {
      console.log("document 事件捕获【原生】");
    }
    document.addEventListener("click", handleDocumentClick, true);

    const html = document.documentElement;
    function handleHtmlClick(e) {
      console.log("html 事件捕获【原生】");
    }
    if (html) {
      html.addEventListener("click", handleHtmlClick, true);
    }

    const body = document.body;
    function handleBodyClick(e) {
      console.log("body 事件捕获【原生】");
    }

    if (body) {
      body.addEventListener("click", handleBodyClick, true);
    }
    const root = document.getElementById("root");
    function handleRootClick(e) {
      console.log("root 事件捕获【原生】");
    }

    if (root) {
      root.addEventListener("click", handleRootClick, true);
    }
    // 暂时注释，测试 React
    const container = document.getElementById("container");
    function handleContainerClick(e) {
      console.log("container 事件捕获【原生】");
    }

    if (container) {
      container.addEventListener("click", handleContainerClick, true);
    }

    const inner = document.getElementById("inner");
    function handleInnerClick(e) {
      console.log("inner 事件捕获【原生】");
    }

    if (inner) {
      inner.addEventListener("click", handleInnerClick, true);
    }

    return () => {
      if (document) {
        document.removeEventListener("click", handleDocumentClick, true);
      }

      if (html) {
        html.removeEventListener("click", handleHtmlClick, true);
      }
      if (body) {
        body.removeEventListener("click", handleBodyClick, true);
      }
      if (root) {
        root.removeEventListener("click", handleRootClick, true);
      }

      if (container) {
        container.removeEventListener("click", handleContainerClick, true);
      }

      if (inner) {
        inner.removeEventListener("click", handleInnerClick, true);
      }
    };
  }, []);

  return (
    <Space direction="vertical">
      <Card title="事件对象的对比">
        <Button
          onClick={(e) => {
            console.log("react 点击事件", e);
          }}
        >
          React 点击事件
        </Button>
        <Button id="btn">原生点击事件</Button>
      </Card>
      <Card title="事件捕获的对比">
        <div
          id="container"
          onClickCapture={(e) => {
            console.log("%c container 事件捕获【react】", "color: red;");
          }}
        >
          <div
            id="inner"
            onClickCapture={(e) => {
              console.log("%c inner 事件捕获【react】", "color: red;");
            }}
          ></div>
        </div>
      </Card>
    </Space>
  );
}

export default Demo;
