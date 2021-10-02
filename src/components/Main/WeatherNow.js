import React from 'react';
import { Cities, WeatherNowWrapper } from './style';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCities } from '../../features/appSlice.js';
import { Container, Title } from '../../style';

function WeatherNow() {
  const cities = useSelector(selectCities);

  return (
    <Container>
      <WeatherNowWrapper>
        <Title>Weather now</Title>
        <Cities>
          {cities.map(({ city, id }) => (
            <Link to={`/${city}`} key={id}>
              <p>{city}</p>
            </Link>
          ))}
        </Cities>
      </WeatherNowWrapper>
    </Container>
  );
}

export default WeatherNow;
