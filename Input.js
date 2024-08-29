import React from 'react'
import propTypes from 'prop-types';

const Input = React.forwardRef(
    ({
        className="",
        name="",
        placeholder="",
        type="text",
        label="",
        prefix,suffix,onChange,

        ...restProps
    },
    ref,)=>{
  return (
    <label className={`${className} undefined`}>
    {!!label && label}
    {!!prefix && prefix}
    <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
    {!!suffix && suffix}  
    </label>
  )
},
);
Input.propTypes={
    className:propTypes.string,
    name:propTypes.string,
    placeholder:propTypes.string,
    type:propTypes.string,
    label:propTypes.string,
    prefix:propTypes.node,
    suffix:propTypes.node,
};

export default Input
