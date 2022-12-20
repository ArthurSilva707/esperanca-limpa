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

export const Input = styled.TextInput`
    
    color: #fff; 
    borderBottomColor: white;
    borderBottomWidth: 2px;
    text-align:center;
    font-weight:bold;
    font-size:20px;
    margin:10px;
    padding:0 10px;
    width:50%;

   

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
