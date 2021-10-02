import styled from 'styled-components';
import Image1 from '../../assets/image1.png';

export const MainWrapper = styled.main`
  padding-bottom: 100px;
`;

export const HeroSection = styled.div`
  width: 100%;
  height: 593px;
  background-image: url(${Image1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 500;
    font-size: 8vw;
    color: white;
    margin: 0;
    text-transform: uppercase;
  }
`;

export const NewsWrapper = styled.div`
  padding: 96px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }  
`;
export const NewsSection = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const News = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const GeneralNews = styled.div`
  margin-right: 16px;
  h4 {
    font-weight: 500;
    font-size: 18px;
    margin: 16px 0;
    font-size: 24px;
    font-weight: bold;
  }
  img {
    width: 100%;
    max-width: 920px;
    height: auto;
  }
  p {
    font-weight: 300;
    font-size: 16px;
  }
`;
export const SecondNews = styled.div`
  h4 {
    font-size: 16px;
    margin: 16px 0;
    font-weight: bold;
  }
  img {
    width: 100%;
    max-width: 296px;
    height: auto;
  }
  span {
    font-weight: bold;
  }
`;
export const SecondNewsItem = styled.div`
  margin-bottom: 20px;
`;
export const OtherNews = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  h4 {
    font-weight: bold;
    font-size: 16px;
    margin: 0 0 20px 0;
  }
  img {
    width: 88px;
    height: 80px;
    object-fit: cover;
    margin-right: 16px;
    @media (max-width: 768px) {
    display: none;
  } 
  }
  p {
    margin-top: 8px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
  }
  span {
    font-weight: bold;
  }
`;
export const OtherNewsItem = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  } 
`;
export const OtherNewsTitle = styled.div`
  /* display: flex; */
`;

export const WeatherNowWrapper = styled.div`
  h5 {
    font-weight: 500;
    font-size: 20px;
    margin: 0;
  }
  /* display: flex; */
`;
export const Cities = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  a {
    text-decoration: none;
    &:hover {
      opacity: 0.7;
    }
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: black;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
