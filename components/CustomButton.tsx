'use client'

import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title, handleClick, containerStyles}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={`button`}
      className={`custom-button ${containerStyles}`}
      onClick={handleClick}
    >
        <span>
            {title}
        </span>
    </button>
  )
}

export default CustomButton