import React from "react";
const {Container, Header,OrderName,OrderPrice, Text,ProductsList} = require('./styles');

const OrderCard = () => {
  const handleOnPress = () => {};
  return (
      <Container>
          <Header>
              <OrderName>Pedido 1</OrderName>
              <OrderPrice>R$ 50</OrderPrice>
          </Header>
          <Text>Há 30 min.</Text>

          <ProductsList>
              <Text>Pizza calabresa</Text>
              <Text>Pizza calabresa</Text>
              <Text>Pizza calabresa</Text>
          </ProductsList>
      </Container>
  );
};
export default OrderCard;
