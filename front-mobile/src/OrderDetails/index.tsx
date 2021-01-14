import React from 'react';
const { Container, Btn, BtnTxt } = require('./styles');
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
import { Order } from '../types';
import {Alert, Linking, Text} from 'react-native'
import OrderCard from '../OrderCard';
import { confirmDelivery } from '../api';
type Props = {
    route: {
        params: {
            order: Order
        }
    }
}
const OrderDetails = ({route} : Props) => {
  const navigation = useNavigation();
  const {order} = route.params;
  const handleOnCancel = () => {
    navigation.navigate("Orders");
  }
  const handleConfirm = () => {
      confirmDelivery(order.id)
      .then(() => {
        Alert.alert(`Pedido ${order.id} confirmado com sucesso!`)
        navigation.navigate("Orders");
      })
      .catch(error => {
        Alert.alert(`Houve erro ao confirmar pedido ${order.id}!`)
      });
  }

  const handleStartNavigation = () => {
      Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`);
  }

  return <>
  <Header />
    <Container>
        <OrderCard order={order} />
        <Btn onPress={handleStartNavigation}>
            <BtnTxt>
                Iniciar navegação
            </BtnTxt>
        </Btn>
        <Btn onPress={handleConfirm}>
            <BtnTxt>
                Confirmar entrega
            </BtnTxt>
        </Btn>
        <Btn onPress={handleOnCancel}>
            <BtnTxt>
                Cancelar
            </BtnTxt>
        </Btn>
    </Container>
  </>;
};
export default OrderDetails;
