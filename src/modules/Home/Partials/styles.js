import { images } from "@assets/images";
import { THEME } from "@theme/index";
import { Collapse } from "antd";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";


//Swiper styles starts =====>
export const SwiperContainer = styled.div`
  width: 100%;
  max-width:100%;
  height: 350px;
  padding: 20px;
  background-image: url(${images.BACKGROUND});
  background-size: cover;
  background-position: center;

  .searchHolder{
    /* padding: '28px 30px', backgroundColor: "#ffffff",borderRadius:'5px' */
    padding: 10px 30px;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .banglore{
    font-size: 14px;
  }
  h1{
    font-size: 28px;
    font-weight: 600;
    /* box-shadow: 0px 4px 5px 0px #00000040; */
    color: #ffffff;
    max-width: 490px;
  }
  .swiperText{
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    max-width: 391px;
    margin-top: 15px;
    color: #ffffff;
  }

  .input{
    border: none;
    border-radius: 0px;
    border-left: 2px solid black;
  }

  @media ${THEME.TABLET} {
    height: 611px;
  padding: 80px;
h1{
  font-size: 48px;
  line-height: 60px;
}
.swiperText{
  font-size: 18px;
}
.searchHolder{
  padding: 28px 30px;
}
.banglore{
  font-size: 18px;
}
  }
`

export const SwiperHolder = styled(Swiper)`
  height: 611px;

  .swiper-button-next,
  .swiper-button-prev{
    width: 50px;
    height: 50px;
    background:rgba(255,255,255,.125);
    border-radius:50%;

    &::after{
      font-size:20px;
      color:${THEME.white};
    }
  }
`

export const SwiperCard = styled(SwiperSlide)`
 width: 100%;
`
//swiper styles end =====>


//popular Lab styles starts =====> 
export const PopularLabContainer = styled.div`
padding: 30px 23px ;
border-radius: 5px;
background-color: #ffffff;
@media ${THEME.TABLET} {
padding: 60px 43px;
}
`
//popular Lab styles ends =====> 

//popular test styles starts =====> 
export const PopularText = styled.p`
 font-size: 32px;
 font-weight: 700;
 text-align: center;
 margin-bottom: 30px;
`
export const PopularTextContainer = styled.div`
padding: 30px 23px ;
border-radius: 5px;
margin: 5px 0px;
background-color: #ffffff;
@media ${THEME.TABLET} {
padding: 60px 43px;
}
`

export const TestHolder = styled.div`
display: flex;
flex-direction: row;
border-radius: 50px;
align-items: center;
gap: 5px;
justify-content: center;
padding:5px 20px 5px 5px;
width: auto;
background-color:#F5F7F8;

.test{
  font-size: 14px;
  font-weight: 400;
}
.testHolder{
  max-width: 400px;
  background-color:red;
}
@media ${THEME.TABLET} {
  font-size: 18px;
}
`
//popular test styles ends =====> 


//how we work styles starts =====> 
export const WorkHolder = styled.div`
 /* margin-top: 60px; */
 padding: 60px 113px 60px 113px;
 background-color: ${THEME.primary_light};

 .title{
  font-size: 32px;
  font-weight: 700;
  color: ${THEME.primary_color};
  text-align: center;
  margin-bottom: 30px;
 }
 `

export const WorkCard = styled.div`
 /* height: 279px;
 width: 390px; */
 position: relative;
 background-color: cyan;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 `

export const RoundiconHolder = styled.div`
 position: absolute;
 z-index: -99;
 `

export const WorkTitle = styled.span`
 color: ${THEME.primary_color};
 background-color: #ffffff;
 padding: 5px 10px;
 border-radius: 50px;
 `

export const WorkImgHolder = styled.div`
 height: 100px;
 width: 100px;
 `
//how we work styles ends =====> 


//pick where you left styles starts =====>
export const PackageContainer = styled.div`
background-color: #f2f2f2;
padding:20px;

@media ${THEME.TABLET} {
  padding:30px 0px 30px 80px;
}

.cardHolder{
  position: relative;
}
.icon{
  position: absolute;
  top: 40%;
  right: 7%;
cursor: pointer;
}
`

export const NextButton = styled.div`
position: absolute;
height: 98px;
width: 98px;
border-radius: 50px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
background-color: #ffffff;
top: 30%;
right: 5%;
cursor: pointer;


`
export const PackageTitle = styled.div`
padding-bottom: 15px;
font-size: 20px;
font-weight: 500;
`
export const PackageCard = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
gap: 30px;
/* width: 400px; */
background-color: #ffffff;
border-radius: 5px;
`

export const PackageCardText = styled.div`
font-size: ${(props) => props.size && (props.size - 5)};
font-weight: ${(props) => props.weight && props.weight};
color: ${(props) => props.color && props.color};
/* line-height: 25px; */

@media ${THEME.MOBILEL} {
  font-size: ${(props) => props.size && props.size};
  font-weight: ${(props) => props.weight && props.weight};
  color: ${(props) => props.color && props.color};
  line-height: 25px;
  text-decoration: ${(props) => props.lineThrough ? props.lineThrough : 'none'};
}
`
export const RatingHolder = styled.div`
background-color: #007405;
display: flex;
flex-direction: row;
align-items:center;
justify-content: center;
padding: 2px 4px;
gap: 2px;
border-radius: 3px;
color: #ffffff;
`
export const DicountHolder = styled.div`
padding: 4px;
border: 1px;
border-style: dashed;
border-color: #029923;
background-color: #DDFFE4;
color: #029923;
width: 70px;
`
export const BookButton = styled.div`

`

export const PackageCardTop = styled.div`

`
export const PackageCardBottom = styled.div`
.bookButton{
   /* borderRadius: '3px', cursor: 'pointer' h: '127px', height: '42px', backgroundColor: THEME.primary_color, */
   border-radius: 3px;
   cursor: pointer;
   width: 90px;
   height: 40px;
   background-color: ${THEME.primary_color};
   @media ${THEME.MOBILEL} {
    height: 42px;
    width: 127px;
   }
}

.ExpectText{
  /* size={'14px'} weight={400} color={THEME.primary_color} */
  font-size: 14px;
  font-weight: 400;
  color: ${THEME.primary_color};
}
`
//pick where you left styles ends =====>

//AdvertisementContainer styles starts =====>
export const AdvertisementContainer = styled.div`
  background-image: url(${images.ADVERTISEMENT});
  background-size: cover;
  background-position: center;
  max-width: 1280px;
  height: 180px;
  position: relative;
  margin: 0px 20px;

  .circle1{
    height: 50px;
    width: 50px;
    background-color: #f2f2f2;
    position: absolute;
    border-radius: 50px;
    top: 35%;
    right: -30px;
    z-index: 99999;
  }
  .circle2{
    height: 50px;
    width: 50px;
    background-color: #f2f2f2;
    position: absolute;
    border-radius: 50px;
    top: 35%;
    left: -30px;
  }

  @media ${THEME.TABLET} {
  height: 280px;
  margin: auto;

  .circle1{
    height: 100px;
    width: 100px;
    background-color: #f2f2f2;
    position: absolute;
    border-radius: 50px;
    top: 35%;
    right: -50px;
    z-index: 99999;
  }
  .circle2{
    height: 100px;
    width: 100px;
    background-color: #f2f2f2;
    position: absolute;
    border-radius: 50px;
    top: 35%;
    left: -50px;
  }
  }
`
export const DiscountHolder = styled.div`
position: absolute;
right: 0;
width: 30%;
height: 180px;
background-color: ${THEME.primary_color};
z-index: 999;
color: #ffffff;
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 10px;
h1{
font-size: 30px;
font-weight: 900;
}
h2{
font-size: 32px;
font-weight: 700;
}
h3{
  font-weight: 22px;
  font-weight: 500;
}

@media ${THEME.TABLET} {
height: 280px;
padding-left: 50px;

h1{
  font-size: 64px;
}
h2{
  font-size: 32px;
}
}
`
//AdvertisementContainer styles ends =====>


//Blog styles starts =====>
export const BlogCard = styled.div`
box-shadow: 0px 0px 15px 0px #3EC1D00D;
padding: 20px;
background-color: #ffffff;
/* width: 360px; */
position: relative;
h3{
  font-size: 24px;
  font-weight: 600;
  padding: 15px 0px;
}
p{
  font-size: 18px;
  font-weight: 400;
}
`
export const BlogImgHolder = styled.div`
background-color: red;
display: flex;
align-items: center;
justify-content: center;
`

export const Natureholder = styled.div`
position: absolute;
background-color: ${THEME.primary_color};
padding: 0px 20px;
border-radius: 50px;
top: 28px;
right: 28px;
p{
line-height: 32px;
font-size: 12px;
font-weight: 700;
color:#ffffff;

}
`
//Blog styles ends =====>

//constct us style starts =====>
export const ContactusContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px 40px;
background-color: ${THEME.primary_light};
position: relative;
overflow: hidden;

.plus1{
  position: absolute;
  top: 10%;
  left: 5%;
  height: 25px;
  width: 25px;
}
.plus2{
  position: absolute;
  bottom: 5%;
  left: 20%;
  height: 50px;
  width: 50px;
}
.plus3{
  position: absolute;
  bottom: -15%;
  right: 5%;
  height: 100px;
  width: 100px;
}

@media ${THEME.TABLET} {
padding: 60px 200px;
.plus1{
  top: 10%;
  left: 5%;
  height: 50px;
  width: 50px;
}
.plus2{
  bottom: 5%;
  left: 20%;
  height: 100px;
  width: 100px;
}
.plus3{
  bottom: -15%;
  right: 5%;
  height: 250px;
  width: 250px;
}
}
`
export const ContactusCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
gap: 20px;
text-align: center;
h1{
  font-size: 30px;
  font-weight: 700;
  color: ${THEME.primary_color};
}
p{
  font-size: 16px;
  font-weight: 400;
  max-width: 800px;
}

@media ${THEME.TABLET} {
gap: 60px;
h1{
  font-size: 48px;
}
p{
  font-size: 18px;
}
}
`
//constct us style ends =====>

// FAQ styles starts =====>
export const FaqContainer = styled.div`
  padding: 30px 0px;
  max-width: 1000px;
  margin: 0 20px;

  h1{
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    color: ${THEME.primary_color};
  }
  @media ${THEME.TABLET} {
    padding: 60px 0px;
  max-width: 1000px;
  margin: 0 auto;
  h1{
    margin-bottom: 30px;
    font-size: 48px;
  }
  }
`;

export const FaqCollapse = styled(Collapse)`
.ant-collapse-item >.ant-collapse-header .ant-collapse-header-text{
  font-size: 16px;
  font-weight: 600;
  padding: 6px 0px;
}
.ant-collapse-item{
  background-color: #ffffff;
}


.ant-collapse-content-box{
padding: 8px 0px;
font-weight: 400;
font-size: 14px;
background-color: #ffffff;

}

@media ${THEME.TABLET} {
  .ant-collapse-item >.ant-collapse-header .ant-collapse-header-text{
  font-size: 24px;
  font-weight: 600;
  padding: 16px 0px;
}
.ant-collapse-content-box{
padding: 20px 0px;
font-size: 18px;
font-weight: 400;
}
}
`
// FAQ styles ends =====>

// Footer Styles starts =====>
export const HomeFooterContainer = styled.div`
padding: 0px 40px;

.footerCard{
  margin: 20px 0px;
  gap: 5px;
}


@media ${THEME.TABLET} {
  padding: 120px 80px 0px 80px;
  .footerCard{
  margin: 40px 0px;
  gap: 20px;
}
}
`

export const FooterImg = styled.div`
cursor: pointer;
`
// Footer Styles ends =====>


