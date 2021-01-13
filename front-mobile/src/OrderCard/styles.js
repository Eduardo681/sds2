import styled from "styled-components";

export const Container = styled.ScrollView`
  margin-top: 10%;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 2%;
  padding: 15px;
  background-color: #ddd;
  border-radius: 10px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.24px;
  color: #9e9e9e;
  font-family: "OpenSans_400Regular";
`;
export const OrderName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.24px;
  color: #263238;
  font-family: "OpenSans_700Bold";
`;

export const OrderPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  letter-spacing: -0.24px;
  color: #da5c5c;
  font-family: "OpenSans_700Bold";
`;

export const ProductsList = styled.View`
  border-top-color: #e6e6e6;
  border-top-width: 1px;
  margin-top: 20px;
  padding-top: 15px;
`;
