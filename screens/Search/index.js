import React, { useState } from 'react';
import { Alert,View, Image } from 'react-native';
import { Button, ButtonText } from '../Home/style';
import { Input, Text, styles } from './style';


const Search = (props) => {
  const [nome, setNome] = useState('');

  
  return (
    <View style={styles.container}>
      <Text>Informe o nome do deputado!</Text>
      <Input placeholder="Nome" placeholderTextColor="#FFF" 
      value={nome}
      onChangeText={setNome}
      />
      <Button onPress={() => {
        if (nome.length > 0){
          props.navigation.navigate('Result',{nome})
        }else{
          Alert.alert('Você precisa digitar um nome!')
        }
      }}><ButtonText>Pesquisar</ButtonText></Button>

    </View>
  );
};



export default Search;

