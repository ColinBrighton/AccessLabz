import React, { useState } from 'react'
import {  FaqCollapse, FaqContainer } from './styles';
import { faqsData } from '@assets/commonData/Data';
import { Collapse } from 'antd';

const Faq = () => {
  
  return (
    <FaqContainer>
      <h1>Frequently Asked Questions</h1>
      <FaqCollapse expandIconPosition='end' items={faqsData}/>
    </FaqContainer>
  )
}

export default Faq
