import React from 'react'
const sizes ={
 headingxs:"text-[24px]  font-bold lg:text-[20px] md:text-[22px]",
 headings:"text-[32px]  font-bold lg:text-[27px] md:text-[30px] sm:text-[28px]",
};



const Heading = ({ children,className="",size="headingxs",as, ...restProps}) => {

    const component = as || "h6";
  return (
    <component className={`text-white-a700 font-inter ${className} ${sizes[size]}`}{...restProps}>
    {children}
    </component>
  )
}

export default Heading
