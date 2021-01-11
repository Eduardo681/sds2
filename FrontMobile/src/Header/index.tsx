import React from 'react';
import { Container, Title, Logo } from './styles';

const Header = () => {
  return <>
    <Container>
      <Logo source={require('../assets/logo.png')} />
      <Title>DS Delivery</Title>
    </Container>
  </>;
};
export default Header;
