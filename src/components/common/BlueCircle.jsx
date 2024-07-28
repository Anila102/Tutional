import React from 'react'

const BlueCircle = ({ height, width ,top,right,left,customClass}) => {
  const style = {
    // ...(width && { width: width }),
    // ...(height && { height: height }),
    // ...(top && { top: top }),
    // ...(right && { right: right }),
    // ...(left && { left: left }),
  };
  return (
    <div className={`blue_circle ${customClass}`} style={style}></div>
  )
}

export default BlueCircle