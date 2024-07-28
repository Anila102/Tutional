import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({customClass,buttonText}) => {
  return (
    
    <Button className={customClass}>{buttonText}</Button>
  )
}

export default CustomButton