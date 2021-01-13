import React from 'react';
const { Container, Title, Logo } = require('./styles');
import {TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("Home")
  }

  return <>
    <TouchableWithoutFeedback onPress={handleOnPress}>
    <Container>
      <Logo source={require('../assets/logo.png')} />
      <Title>DS Delivery</Title>
    </Container>
    </TouchableWithoutFeedback>
  </>;
};
export default Header;
