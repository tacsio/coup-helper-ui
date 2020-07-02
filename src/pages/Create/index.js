import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";
import defaultStyles from "../defaultStyles";

import SetupHeader from "../../components/SetupHeader";
import RulexBox from "../../components/RulesBox";
import ActionButton from "../../components/ActionButton";

import { getRegrasCriacao } from "../../services/rulesService";

export default function Create() {
  const navigation = useNavigation();
  const route = useRoute();

  const nomeJogador = route.params.nomeJogador;

  const [numeroJogadores, setNumeroJogadores] = useState("3");
  const [regras, setRegras] = useState({});

  useEffect(() => {
    getRegrasCriacao(numeroJogadores)
      .then((response) => setRegras(response.data))
      .catch((error) => {
        console.log(error);
        //! TODO: codigo de erro
      });
  }, [numeroJogadores]);

  function handleCreate() {
    //TODO: criar partida
    //TODO: adicionar jogador criador a partida
    //TODO: navegar para partida
    console.log("create");
    navigation.navigate("Game");
  }

  return (
    <View style={defaultStyles.container}>
      <SetupHeader />

      <View style={defaultStyles.main}>
        <Text style={defaultStyles.formLabel}>Número de Jogadores</Text>
        <TextInput
          style={[defaultStyles.formInput, styles.formInput]}
          keyboardType="numeric"
          value={numeroJogadores}
          onChangeText={setNumeroJogadores}
          autoFocus={true}
          maxLength={2}
        />

        <RulexBox rules={regras} />
      </View>

      <View style={defaultStyles.actions}>
        <ActionButton text="Criar" onPress={() => handleCreate()} />
      </View>
    </View>
  );
}
