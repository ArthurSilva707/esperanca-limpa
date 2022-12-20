import React, { useState } from 'react';
import {  View,  Image} from 'react-native';
import { Button, ButtonText, Text, styles  } from './style';


const Home = (props) => {
 
  return (
    <View style={styles.container}>       
    
           
        <Text>Bem Vindo ao Esperança Limpa.</Text>           
        <Text>Um aplicativo onde você conseguirá visualizar informações relacionada a deputados!{'\n'} PS: alguns dados podem estar desatualizados</Text>     
        <Button onPress={() => {props.navigation.navigate('Search')}}><ButtonText>Começar</ButtonText></Button>
        
      
    </View>
  );
};



export default Home;


// .logo{
//     height: 30vh;
//     border-radius:50% ;
//     display: block;
//     margin: auto;
 
// }