import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';

type ButtonProps = AntButtonProps;

const Button = (props: ButtonProps) => {
  return <AntButton {...props}>{props.children}</AntButton>;
};

export default Button;
