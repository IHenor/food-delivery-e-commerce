import React from 'react'
import '../ui/uiStyles/Button.css';

const Button = ({name,className}) => {
  return (
    <button className={className} type="button">
      {name}
    </button>
  )
}

export default Button