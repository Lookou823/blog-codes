import React from "react";

type BasicProps = {
  unusedFormItems: string[];
};
type FooterControl = {
  showFooter: true;
} & BasicProps;

type ExternalControl = {
  showFooter: false;
  form: any; // 这里可以根据你的需求替换为具体的表单类型
  onCancel: () => void;
  onSubmit: () => void;
} & BasicProps;

type Props = FooterControl | ExternalControl;

const MyComponent: React.FC<Props> = (props) => {
  // 组件的实现
  return (
    <div>
      {/* 根据props的不同，渲染不同的内容 */}
      {props.showFooter ? (
        <div>默认提交和取消按钮</div>
      ) : (
        <div>
          <button onClick={props.onCancel}>取消</button>
          <button onClick={props.onSubmit}>提交</button>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
