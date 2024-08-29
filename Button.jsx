import React from 'react'
import propTypes from "prop-types"
const Button = ({
    children,
    className="",
    leftIcon,
    rightIcon,
    ...restProps
}) => {
  return (
    <button className = {`${className}`} {...restProps}>
    {!!leftIcon && leftIcon}
    {children}
    {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes={
    className:propTypes.string,
    children:propTypes.node,
    leftIcon:propTypes.node,
    rightIcon:propTypes.node,
};

export default Button
