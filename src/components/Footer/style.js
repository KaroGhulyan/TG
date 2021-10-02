import styled from 'styled-components';

export const FooterWrapper = styled.div`
  padding: 24px 0;
  background-color: black;
  color: #C8C8C8;
`;

export const FooterTop = styled.div``;
export const FooterMain = styled.div`
  display: flex;
  @media (max-width: 768px) {
  flex-direction: column;
  }
  a {
    color: #C8C8C8;
    &:hover {
      opacity: 0.7;
    }
  }
  ul {
    padding: 0;
    margin-right: 100px;
  }
  li {
    list-style: none;
    padding: 8px 0;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
  }
`;
export const Icons = styled.div`
  padding: 22px 0;
  img {
    margin-right: 32px;
  }
`;
export const FooterBottom = styled.div`
  p {
    text-align: center;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #c8c8c8;
  }
`;
