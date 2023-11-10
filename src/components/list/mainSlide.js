import React, { Component } from "react";
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
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 50px;
  
  & h3 {
    font-weight: bold;
  }

`;

const SlideBox = styled(Slider)`
  width: 580px;
  height: 380px;
`;

const ImgBox = styled.div`
  width: 580px;
  height: 360px;

  & img {
    width: 580px;
    height: 360px;
    border-radius: 10px;
    background-color: #fff;
  }
`;

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
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
        <SlideBox
          style={{textAlign:"end", padding:"220px 70px 0px 0px"}}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <h3>휴애리 동백 축제</h3>
            <p>
              2023.11.14 ~ 2024.01.31<br/>
              제주도 서귀포시
            </p>
          </div>
          <div>
            <h3>이월드 일루미네이션</h3>
            <p>
              2023.11.17 ~ 2023.12.31<br/>
              대구 달서구
            </p>
          </div>
          <div>
            <h3>도시이야기 페스티벌-말걸음을 잇다</h3>
            <p>
              2023.10.01 ~ 2023.11.27<br/>
              경기도 부천시
            </p>
          </div>
          <div>
            <h3>연천율무축제</h3>
            <p>
              2023.11.10 ~ 2023.11.12<br/>
              경기도 연천군
            </p>
          </div>
          <div>
            <h3>서울 발레 페스티벌</h3>
            <p>
              2023.11.08 ~ 2023.11.12<br/>
              서울 송파구
            </p>
          </div>
          <div>
            <h3>서산 국화 축제</h3>
            <p>
              2023.11.03 ~ 2023.11.12<br/>
              충청남도 서산시
            </p>
          </div>
        </SlideBox>
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
          <ImgBox>
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