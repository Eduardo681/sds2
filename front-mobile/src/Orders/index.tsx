import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { fetchOrders } from "../api";
import Header from "../Header";
import OrderCard from "../OrderCard";
import { Order } from "../types";
import {Text} from 'react-native';
import { useIsFocused, useNavigation } from "@react-navigation/native";
const { Container } = require("./styles");

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () => {
    fetchOrders()
    .then((res) => setOrders(res.data))
    .catch((error) => console.log(error));
  }
  useEffect(() => {
    if(isFocused){
      fetchData()
    }
  }, [isFocused]);

  const handleOnPress = (order:Order) => {
    navigation.navigate('OrderDetails', {order});
  };

  if(orders.length == 0){
    return <Text> Carregando </Text>
  } else {
    return (
      <>
        <Header />
        <Container>
          {orders.map((order) => (
            <TouchableWithoutFeedback 
            key={order.id} 
            onPress={() => handleOnPress(order)}>
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))}
        </Container>
      </>
    )
  }
}
export default Orders;
