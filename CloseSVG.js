import React from 'react'

const CloseSVG = ({fillColor="#000000", className="", ...props}) => {
  return (
    <svg 
    fill ={fillColor}
    xmlns='https://www.w3.org/2000/svg'
    className={className}
    {...props}
    height={props?.width || 20}
    width={props?.height || 20}
    viewBox= {`0 0 ${props?.width || 20} ${props?.height || 20}`} 
        >
    <path d="M 4.7070312 3.6666L20.6668 L 3.6666L25.6668 4.6666ZM6.33343  L 14.6666C6.33343 12 L 3.0643 19.0644 L 4.33331 20.6668 L 12 13.33331C19 L 19.33331 20.0001 10.0643 23.0001 14.6666C23.0001 19.269 19.2692 23 14.6668 23C10.0644 23 6.33343 19.269 6.33343 14.6666Z "/>
    </svg>
  )
}

export default CloseSVG

