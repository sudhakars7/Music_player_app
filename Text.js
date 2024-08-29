import React from 'react'

const sizes ={
    textxs:"text-[14px] font-normal not-italic",
    texts:"text-[16px] font-normal not-italic lg:text-[13px]",
    textmd:'text-[18px] font-normal not-italic lg:text-[15px]',
}
const Text = ({ children, className="" ,as,size="textmd", ...restProps}) => {
   const component = as || 'p';
    return (
        <component className={`text-white-a700_99 font-inter ${className} ${className} ${sizes[size]}`}{...restProps}>
        {children}
        </component>
  )
}

export default Text
