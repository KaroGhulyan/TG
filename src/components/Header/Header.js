import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Burger from './Burger';
import { HeaderWrapper } from './style';
import LogoImg from '../../assets/TG.png';
import { Container, Logo } from '../../style';
import { Link } from 'react-router-dom';

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <HeaderWrapper>
      <Container>
        <Link to={'/'}>
          <Logo src={LogoImg} alt="Logo" />
        </Link>
        <Burger open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
