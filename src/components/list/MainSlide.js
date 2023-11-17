import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import mainImg_1 from "../../images/main/mainSlideImg_1.png";
import mainImg_2 from "../../images/main/mainSlideImg_2.png";
import mainImg_3 from "../../images/main/mainSlideImg_3.png";
import mainImg_4 from "../../images/main/mainSlideImg_4.jpg";
import mainImg_5 from "../../images/main/mainSlideImg_5.jpg";
import mainImg_6 from "../../images/main/mainSlideImg_6.jpg";


const SliderContainer = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 50px;

  & h3 {
    font-weight: bold;
  }

  ul.slick-dots {
    bottom: -25px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
    margin-bottom: 60px;
    

      ul.slick-dots {
      bottom: -140px;
    }

      ul.slick-dots li {
        margin: 0 25px;
      }

        ul.slick-dots li button::before {
          width: 40px;
          height: 40px;
          text-align: center;
          font-size: 18px;

        }
  }

  @media screen and (max-width: 768px) {
    ul.slick-dots li {
      margin: 0 20px;
    }
  }
`;

const SlideBox = styled(Slider)`
  width: 580px;
  height: 380px;

  @media screen and (max-width: 420px) {
      width: 400px;
      height: 300px;
      margin: 0 auto;
    }
  

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
`;

const SlideBoxText = styled(Slider)`
  width: 580px;
  height: 380px;
  text-align: end;
  padding: 220px 40px 0 0;

  @media screen and (max-width: 768px){
    padding-top: 10px;
    height: 100%;
    padding-right: 0;
  }

  @media screen and (max-width: 620px) {
    width: 450px;
    margin: 0 auto;
  }

  @media screen and (max-width: 420px) {
    width: 400px;
    /* height: 300px; */
    margin: 0 auto;
    padding-right: 10px;

  } 
`;

const ImgBox = styled.div`
  width: 580px;
  height: 360px;

  & img {
    width: 580px;
    height: 360px;
    border-radius: 10px;
    background-color: #fff;

    @media screen and (max-width: 1199px) and (min-width: 990px){
      width: 480px;
    }

    @media screen and (max-width: 989px) and (min-width: 769px){
      width: 380px;
    } 

    @media screen and (max-width: 620px) {
      width: 470px;
      margin: 0 auto;
    } 

    @media screen and (max-width: 420px) {
      width: 400px;
      height: 300px;
      margin: 0 auto;
    } 
  }  
`;


export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    const items = this.props;
    this.state = {
      nav1: null,
      nav2: null
    };
  }
  
  
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  
  render() {
    return (
      <SliderContainer>
        <SlideBoxText
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <h3>삼척비치썸페스티벌</h3>
            <p>
              2023-07-26 ~ 2023-07-30<br/>
              강원특별자치도 삼척시
            </p>
          </div>
          <div>
            <h3>더 어텀 시즌 아트&플레이 페스타</h3>
            <p>
              2023-09-02 ~ 2023-09-02<br/>
              경기도 평택시
            </p>
          </div>
          <div>
            <h3>2023 청춘대로</h3>
            <p>
              2023-09-21 ~ 2023-09-22<br/>
              서울특별시 광진구
            </p>
          </div>
          <div>
            <h3>원주삼토페스티벌</h3>
            <p>
              2023-09-14 ~ 2023-09-17<br/>
              강원도 원주시
            </p>
          </div>
          <div>
            <h3>선농대제</h3>
            <p>
              2023-04-22 ~ 2023-04-22<br/>
              서울특별시 동대문구
            </p>
          </div>
          <div>
            <h3>구례300리벚꽃축제</h3>
            <p>
              2023-03-31 ~ 2023-04-02<br/>
              전라남도 구례군
            </p>
          </div>
        </SlideBoxText>
        <SlideBox
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={true}
          infinite={true}
          autoplay={true}
          arrows={false}
        >
          <ImgBox onClick={undefined}>
            <img src={mainImg_1}/>
          </ImgBox>
          <ImgBox>
            <img src={mainImg_2}/>
          </ImgBox>
          <ImgBox>
            <img src={mainImg_3}/>
          </ImgBox>
          <ImgBox>
            <img src={mainImg_4}/>
          </ImgBox>
          <ImgBox>
            <img src={mainImg_5}/>
          </ImgBox>
          <ImgBox>
            <img src={mainImg_6}/>
          </ImgBox>
        </SlideBox>
      </SliderContainer>
    );
  }
}
