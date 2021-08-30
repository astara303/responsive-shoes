import React from 'react'
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--mobile']

const COLOR = ['primary', 'green']

//creates attributes that can be swapped whenever using the button component
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor
}) => {
  //if a style is stipulated, uses that size, otherwise uses btn--primary
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  //if a size is stipulated, uses that size, otherwise uses btn--medium
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  //if a color is stipulated, uses that color, otherwise uses primary
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  //the button component
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}