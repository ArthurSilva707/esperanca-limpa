import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { Button, ButtonText } from '../Home/style';
import { Image, SubText, Text, styles } from './style';


const Result = (props) => {
  const nome = props.route.params.nome
  const [politico, setPolitico] = useState('');
  const [partido, setPartido] = useState('');


  const fetchData = () => {

    fetch('https://dadosabertos.camara.leg.br/api/v2/deputados?nome=' + nome)
      .then((res) => res.json())
      .then((results) => {
        console.log(results.dados[0].uriPartido)
        setPolitico(results.dados)

        if (results.dados[0].uriPartido != null) {
          fetch(results.dados[0].uriPartido)
            .then((res) => res.json())
            .then((results) => {
              console.log(results.dados)       
              setPartido(results.dados)       

            })
        }


      })
      .catch((err) => {
        Alert.alert('Algo deu errado!');
      });

  };

  useEffect(() => {
    fetchData();
  }, [nome]);




  return (
    <View style={styles.container}>
      {politico.length > 0 ? (
        <>

          <Image
            source={{
              uri: politico[0].urlFoto,
            }}
          />
          <Text>{politico[0].nome}</Text>
          <SubText>Partido: {politico[0].siglaPartido}</SubText>
          <SubText>UF: {politico[0].siglaUf}</SubText>
        </>


      ) : (
        <Text>Político não encontrado!</Text>

      )}



    {partido != '' ? (
        <>
          <Text>Partido</Text>


          <Image
            source={{
              uri: partido.urlLogo,
            }}
          />
          
          <SubText>Líder: {partido.status.lider.nome}</SubText>
          <SubText>Situação: {partido.status.situacao}</SubText>
          <SubText>Total Deputados: {partido.status.totalMembros}</SubText>
          <SubText>Total Deputados em Posse: {partido.status.totalPosse}</SubText>
        </>

      ) : (
        <></>

      )}

      <Button onPress={() => {

        props.navigation.navigate('Search')


      }}><ButtonText>Voltar</ButtonText></Button>

    </View>
  );
};



export default Result;

