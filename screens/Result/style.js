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
export const SubText = styled.Text`
    
    color: #fff; 
    padding: 5px;
    text-align:center;
    font-weight:bold;
    font-size:20px;
    width:85%;  

`;
export const Image = styled.Image`
    
    width:150px;
    height:150px;
    border-radius:20px;

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
