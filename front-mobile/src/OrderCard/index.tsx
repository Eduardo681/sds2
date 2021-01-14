import React from "react";
import { Order } from "../types";
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
const Intl = require('react-native-intl');
dayjs.locale('pt-br');
dayjs.extend(relativeTime);
const {
  Container,
  Header,
  OrderName,
  OrderPrice,
  Text,
  ProductsList,
} = require("./styles");

type Props = {
  order: Order;
};

export function dateFromNow(date : string){
  return dayjs(date).fromNow();
}


const OrderCard = ({ order }: Props) => {
  const handleOnPress = () => {};
  return (
    <Container>
      <Header>
        <OrderName>Pedido {order.id}</OrderName>
        <OrderPrice>R$ {(order.total).toFixed(2)}</OrderPrice>
      </Header>
      <Text>{dateFromNow(order.moment)}</Text>

      <ProductsList>
        {order.products.map((product) => (
          <Text key={product.id}>{product.name}</Text>
        ))}
      </ProductsList>
    </Container>
  );
};
export default OrderCard;
