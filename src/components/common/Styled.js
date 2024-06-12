// ============  Notification    ===============

import { THEME } from "@theme/index"
import styled from "styled-components"

export const MiniPopUpWrapper = styled.div`
  padding: 10px;
`
export const MiniPopUpTitle = styled.h4`
  letter-spacing: -0.01em;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 0.4rem;
  color: ${THEME.black};
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
`
export const MiniPopUpPara = styled.h4`
  font-weight: 500;
  font-size: 0.8rem;
`

export const PlaceHolder = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  gap:15px;
  flex:1;
  height:100%;
`

export const BtnHolder = styled.div`
  padding: 7px 18px;
  display:inline-block;
  font-size:16px;
  font-weight:700;
  text-shadow: none;
  text-transform: uppercase;
  color: #FFF;
  position: relative;
  letter-spacing: 0;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
  border-radius: 2px;

  &:hover::before{
    width:100%;
  }
  &:hover::after{
    width:10;
  }
  &::before{
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    bottom: 0;
    right: 0;
    top: 0;
    z-index: -1;
    border-radius: 0;
    background: linear-gradient(to bottom, #b0191e 0%, #d7252b 56%, #e2393e 100%);
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }

  &::after{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;    
    z-index: -2;
    border-radius: 0;
    background: linear-gradient(to bottom, #e2393e 0%, #d7252b 44%, #b0191e 100%);
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }      
`