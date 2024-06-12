
import { work } from '@assets/images'
import { THEME } from '@theme/index'
import React from 'react'
import styled from 'styled-components'
const WorkingSection = () => {
    return (
        <Section>
            <p className='title'>How we work</p>

            <div className='container'>
                <div className="holder">
                    <img src={work.ELLIPSE} alt="ellipseborder" className='borderimg bg1' />
                    <img src={work.NUM1} alt="NumberOne" className='num' />
                    <div className="wrapper">
                        <span>shedule</span>
                        <div className="iconHolder">
                            <img src={work.ICON1} alt="callendericon" />
                        </div>
                        <p>Schedule a test from your home</p>
                    </div>
                </div>
                <div className="holder">
                    <img src={work.ELLIPSE} alt="ellipseborder" className='borderimg bg2' />
                    <img src={work.NUM2} alt="NumberOne" className='num2' />
                    <div className="wrapper">
                        <span>Reach lab</span>
                        <div className="iconHolder">
                            <img src={work.ICON2} alt="deliveryicon" />
                        </div>
                        <p>Phlebotomist drops the test sample to lab</p>
                    </div>
                </div>
                <div className="holder">
                    <img src={work.ELLIPSEFULL} alt="ellipseborder" className='borderback' />
                    <img src={work.NUM3} alt="NumberOne" className='num2' />
                    <div className="wrapper">
                        <span>Get Report</span>
                        <div className="iconHolder">
                            <img src={work.ICON3} alt="reporticon" />
                        </div>
                        <p>Get the report on whatsapp</p>
                    </div>  </div>
            </div>
        </Section>
    )
}
export default WorkingSection
export const Section = styled.section`
    padding:60px 0;
    background:${THEME.primary_light};
    .title{
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        color: ${THEME.primary_color};
        padding-bottom: 30px;
    }
    .container{
        max-width:1284px;
        margin:auto;
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        .holder{
            width: 268px;
            height: 279px;
            position:relative;
            display:flex;
            align-items:center;
            justify-content:center;
            .borderimg{
                position:absolute;
                top:0;
                left:0;
                &.bg1{
                    left: -61px;
                    top: 60px;
                    transform: rotate(90deg);
                    @media screen and (min-width: 922px) {
                        top:0;
                        left:0;
                        transform: rotate(0deg);
                    }
                }
                &.bg2{
                    left: -61px;
                    top: 60px;
                    transform: rotate(90deg);
                    @media screen and (min-width: 852px) {
                        top:0;
                        left:0;
                        transform: rotate(0deg);
                    }
                    @media screen and (min-width: 922px) {
                        left: -61px;
                        top: 60px;
                        transform: rotate(90deg);
                    }
                    @media screen and (min-width: 1284px) {
                        top:0;
                        left:0;
                        transform: rotate(0deg);
                    }
                }
            }
            .borderback{
                position:absolute;
                top:0;
                left:0;
            }
            .num{
                position:absolute;
                top:50%;
                left:-44px;
                transform:translateY(-50%);
            }
            .num2{
                position:absolute;
                top:50%;
                left:-100px;
                transform:translateY(-50%);
            }
            &:first-child{
                margin-left:122px;
                margin-right:122px;
                margin-bottom:122px;
                @media screen and (min-width: 922px) {
                    margin-left:42px;
                    margin-bottom:122px;
                }
                    @media screen and (min-width: 1284px) {
                    margin-bottom:0;
                    margin-left:42px;
                    }
            }
            &:nth-child(2){
                margin-left:122px;
                margin-right:122px;
                margin-bottom:122px;
                @media screen and (min-width: 852px) {
                    margin-left:100px;
                    margin-right:122px;
                    margin-bottom:0;
                    }
                    @media screen and (min-width: 922px) {
                        margin-left:100px;
                        margin-right:122px;
                        margin-bottom:122px;
                    }
                    @media screen and (min-width: 1284px) {
                        margin-left:100px;
                        margin-right:122px;
                        margin-bottom:0;
                    }
            }
            &:nth-child(3){
                margin-left:94px;
                margin-right:94px;
                @media screen and (min-width: 852px) {
                        margin-left:94px;
                        margin-right:0;
                        margin-bottom:0;
                    }
                    @media screen and (min-width: 922px) {
                        margin-left:94px;
                        margin-right:94px;
                    }
                    @media screen and (min-width: 1284px) {
                        margin-left:94px;
                        margin-right:0;
                        margin-bottom:0;
                    }
            }
            .wrapper {
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                gap:10px;
                span{
                    padding: 5px 10px 5px 10px;
                    border-radius: 50px;
                    font-size: 14px;
                    font-weight: 300;
                    line-height: 17.64px;
                    text-align: left;
                    background:#fff;
                    color: #1F6CAB;
                }
                .iconHolder{
                    width: 100px;
                    height: 100px;
                    background:#1F6CAB;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border-radius:50%;
                }
                p{
                    width: 100px;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 17.64px;
                    text-align: center;
                    color: #505050;
                }
            }
        }
    }
`