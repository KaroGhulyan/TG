import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    padding: 0 100px;
  }
  @media (max-width: 360px) {
    padding: 0 20px;
  }
`;

export const Logo = styled.img`
  width: 41px;
  height: 48px;
  object-fit: contain;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: black;
  text-transform: uppercase;
`;
