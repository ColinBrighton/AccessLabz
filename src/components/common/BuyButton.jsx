import React from 'react'
import { BtnHolder } from '@components/common/Styled'

const BuyButton = ({text,onClick}) => {
  return (
    <BtnHolder onClick={onClick}>
        {text}
    </BtnHolder>
  )
}

export default BuyButton
