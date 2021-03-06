import styled from "styled-components";
import Image1 from "../../assets/image11.png";

export const WeatherWrapper = styled.section`
  padding-bottom: 96px;
`;
export const GeneralWeatherInfo = styled.div`
  width: 100%;
  height: 462px;
  background-image: url(${Image1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
`;
export const BackSection = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  span {
    font-size: 24px;
    margin-right: 8px;
  }
  &:hover {
    opacity: 0.7;
  }
`;
export const WeatherInfo = styled.div`
  h2 {
    font-weight: 500;
    font-size: 32px;
    margin: 16px 0 8px 0;
  }
  h5 {
    font-weight: 500;
    font-size: 24px;
    margin: 16px 0;
  }
  h1 {
    font-weight: 500;
    font-size: 80px;
    margin: 0;
  }
  small {
    font-weight: 300;
    font-size: 20px;
  }
  a {
    color: white;
  }
  position: absolute;
  top: 50%;
  transform: translate(0px, -50%);
  color: white;
`;
export const OtherWeatherInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  padding: 100px 0;
@media (max-width: 768px) {
  flex-direction: column;
}
`;
export const Info = styled.div`
  width: 40%;
  display: flex;
  margin-right: 30px;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  } 
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    > img {
      margin-right: 8px;
    }
    > p {
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
    }
  }
  > p {
    font-weight: 500;
    font-size: 24px;
  }
`;
