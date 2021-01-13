import React from "react";
import Header from '../Header';
import OrderCard from '../OrderCard';
const {Container} = require('./styles');

const Orders = () => {
  const handleOnPress = () => {};
  return (
    <>
    <Header />
      <Container>
        <OrderCard />
        <OrderCard />

        <OrderCard />

      </Container>
      
    </>
  );
};
export default Orders;
