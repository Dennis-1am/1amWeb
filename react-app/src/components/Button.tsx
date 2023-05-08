import React, { ReactNode } from 'react'

interface ButtonProps{
    children: ReactNode
    color?: "primary" | "secondary"
    onClick?: (e: any) => void;
}

function Button({children, color, onClick}: ButtonProps) {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button