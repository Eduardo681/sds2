import React from "react";
import { Image } from "react-native";
import { Container, SubTitle, Title, Footer, Btn, BtnTxt } from "./styles";

const Home = () => {
  const handleOnPress = () => {};
  return (
    <>
      <Container>
        <Image source={require("../assets/deliveryman.png")} />
        <Title>Acompanhe os pedidos {"\n"} e entregue no prazo!</Title>
        <SubTitle>
          Receba todos os pedidos do seu {"\n"} restaurante na palma da sua mão
        </SubTitle>
      </Container>
      <Footer>
        <Btn onPress={handleOnPress}>
          <BtnTxt>VER PEDIDOS</BtnTxt>
        </Btn>
      </Footer>
    </>
  );
};
export default Home;
