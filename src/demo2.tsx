import React, { useEffect } from "react";
import { Button, Space, Card } from "antd";
function Demo() {
  useEffect(() => {
    function handleDocumentClick(e) {
      console.log("document 事件冒泡【原生】");
    }
    document.addEventListener("click", handleDocumentClick, false);

    const html = document.documentElement;
    function handleHtmlClick(e) {
      console.log("html 事件冒泡【原生】");
    }
    if (html) {
      html.addEventListener("click", handleHtmlClick, false);
    }

    const body = document.body;
    function handleBodyClick(e) {
      console.log("body 事件冒泡【原生】");
    }

    if (body) {
      body.addEventListener("click", handleBodyClick, false);
    }
    const root = document.getElementById("root");
    function handleRootClick(e) {
      console.log("root 事件冒泡【原生】");
    }

    if (root) {
      root.addEventListener("click", handleRootClick, false);
    }
    // 暂时注释，测试 React
    const container = document.getElementById("container");
    function handleContainerClick(e) {
      console.log("container 事件冒泡【原生】");
    }

    if (container) {
      container.addEventListener("click", handleContainerClick, false);
    }

    const inner = document.getElementById("inner");
    function handleInnerClick(e) {
      console.log("inner 事件冒泡【原生】");
    }

    if (inner) {
      inner.addEventListener("click", handleInnerClick, false);
    }

    return () => {
      if (document) {
        document.removeEventListener("click", handleDocumentClick, false);
      }

      if (html) {
        html.removeEventListener("click", handleHtmlClick, false);
      }
      if (body) {
        body.removeEventListener("click", handleBodyClick, false);
      }
      if (root) {
        root.removeEventListener("click", handleRootClick, false);
      }

      if (container) {
        container.removeEventListener("click", handleContainerClick, false);
      }

      if (inner) {
        inner.removeEventListener("click", handleInnerClick, false);
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
      <Card title="事件冒泡的对比">
        <div
          id="container"
          onClick={(e) => {
            console.log("%c container 事件冒泡【react】", "color: red;");
          }}
        >
          <div
            id="inner"
            onClick={(e) => {
              console.log("%c inner 事件冒泡【react】", "color: red;");
            }}
          ></div>
        </div>
      </Card>
    </Space>
  );
}

export default Demo;
