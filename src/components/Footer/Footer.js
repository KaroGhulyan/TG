import React from 'react';
import { Container, Logo } from '../../style';
import {
  FooterBottom,
  FooterMain,
  FooterTop,
  FooterWrapper,
  Icons,
} from './style';
import LogoImg from '../../assets/logoFooter.png';
import { Link } from 'react-router-dom';
import Facebook from '../../assets/icons/facebook 1.svg';
import Twitter from '../../assets/icons/twitter 1.svg';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <Link to={'/'}>
            <Logo src={LogoImg} alt="Logo" />
          </Link>
        </FooterTop>
        <FooterMain>
          <ul>
            <li>
              <Link>About us</Link>
            </li>
            <li>
              <Link>We are hiring</Link>
            </li>
            <li>
              <Link>Contact us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Security</Link>
            </li>
          </ul>
          <Icons>
            <Link>
              <img src={Facebook} alt="Logo" />
            </Link>
            <Link>
              <img src={Twitter} alt="Logo" />
            </Link>
          </Icons>
        </FooterMain>
        <FooterBottom>
          <p>2021 Techguide. LLC. All rights reserved .</p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
