import styled from 'styled-components/native';
import {  StyleSheet } from "react-native";

export const Text = styled.Text`
    
    color: #fff; 
    padding: 5px;
    text-align:center;
    font-weight:bold;
    font-size:30px;
    width:85%;  

`;

export const Button = styled.TouchableOpacity`
    padding: 10px 20px;
    padding-bottom:12px;
    background-color: #072F4E;
    border-radius: 16px;
    border:2px solid white;
    margin:10px auto;    
}
`;

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    font-weight: bold;     
`;


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: '#072F4E',
      color:"#CC0000"
    },
   
  });
