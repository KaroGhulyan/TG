import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "../../style";
import WeatherNow from "../Main/WeatherNow";
import img1 from "../../assets/icons/sun 1.svg";
import img2 from "../../assets/icons/thermometer.svg";
import img3 from "../../assets/icons/humidity.svg";
import img4 from "../../assets/icons/pressure.svg";
import img5 from "../../assets/icons/visibility.svg";
import img6 from "../../assets/icons/wind.svg";
import img7 from "../../assets/icons/sunrise.svg";
import img8 from "../../assets/icons/sunset.svg";
import {
  BackSection,
  GeneralWeatherInfo,
  WeatherWrapper,
  WeatherInfo,
  OtherWeatherInfo,
  Info,
} from "./style";
import moment from "moment";

function City() {
  const { city } = useParams();
  const [data, setData] = useState({});
  const [otherData, setOtherData] = useState([]);
  const apiKey =
    process.env.REACT_APP_API_KEY || "10afaae8e54eceee0e76d952beca0629";
  const getCity = async () => {
    const url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const cityWeather = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const res = await cityWeather.json();
    setData(res);
    const { main, sys, visibility, wind } = res;

    const sunrise = moment(sys?.sunrise).format("hh:mm");
    const sunset = moment(sys?.sunset).format("hh:mm");

    const otherInfo = [
      {
        title: "Feels like",
        icon: img1,
        info: main?.feels_like.toFixed() + "°" || "-",
      },
      {
        title: "High / Low",
        icon: img2,
        info: "High / --" || "-",
      },
      {
        title: "Humidity",
        icon: img3,
        info: main?.humidity || "-",
      },
      {
        title: "Pressure",
        icon: img4,
        info: main?.pressure || "-",
      },
      {
        title: "Visibility",
        icon: img5,
        info: visibility || "-",
      },
      {
        title: "Wind",
        icon: img6,
        info: wind?.speed || "-",
      },
      {
        title: "Sunrise",
        icon: img7,
        info: sunrise || "-",
      },
      {
        title: "Sunset",
        icon: img8,
        info: sunset || "-",
      },
    ];

    setOtherData(otherInfo);
  };

  useEffect(() => {
    getCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <WeatherWrapper>
      <GeneralWeatherInfo>
        <Container>
          <WeatherInfo>
            <Link to={"/"}>
              <BackSection>
                <span>&#8592;</span>Back
              </BackSection>
            </Link>
            <h2>
              {data?.name}, {data?.sys?.country} Weather
            </h2>
            <small>As of 7:34 pm AMT</small>
            <h5>{data?.weather?.length > 0 && data.weather[0]?.main}</h5>
            <h1>{data?.main?.temp.toFixed()}°</h1>
          </WeatherInfo>
        </Container>
      </GeneralWeatherInfo>
      <Container>
        <OtherWeatherInfo>
          {otherData.length > 0 &&
            otherData.map(({ title, info, icon }, index) => {
              return (
                <Info>
                  <div>
                    <img src={icon} alt={title} />
                    <p>{title}</p>
                  </div>
                  <p>{info}</p>
                </Info>
              );
            })}
        </OtherWeatherInfo>
      </Container>
      <WeatherNow />
    </WeatherWrapper>
  );
}

export default City;
