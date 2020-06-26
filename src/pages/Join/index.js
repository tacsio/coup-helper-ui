import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";
import defaultStyles from "../defaultStyles";

import SetupHeader from "../../components/SetupHeader";
import ActionButton from "../../components/ActionButton";
import RulesBox from "../../components/RulesBox";

export default function Join() {
  const navigation = useNavigation();
  
  const [idParitda, setIdPartida] = useState("");
  const [codigoValido, setCodigoValido] = useState(false);
  const [regras, setRegras] = useState();

  useEffect(() => {
    //TODO: consumir da API
    const rules = {
      qtdCartasBaralho: 20,
      qtdCartasJogador: 8,
      qtdMoedasJogador: 2,
    };

    setRegras(rules);
    setCodigoValido(true);
  }, [idParitda]); //TODO add debounce

  function handleJoin() {
    //TODO: navegar para partida
    console.log("join");
    navigation.navigate("Game");
  }
  return (
    <View style={defaultStyles.container}>
      <SetupHeader />

      <View style={defaultStyles.main}>
        <Text style={defaultStyles.formLabel}>Código da Partida</Text>
        <TextInput
          style={[defaultStyles.formInput, styles.formInput]}
          value={idParitda}
          placeholder="Digite o código da partida"
          onChangeText={setIdPartida}
          autoFocus={true}
        />

        {regras && <RulesBox rules={regras} />}
      </View>

      <View style={defaultStyles.actions}>
        <ActionButton
          disabled={codigoValido === false}
          text="Entrar"
          onPress={() => handleJoin()}
        />
      </View>
    </View>
  );
}
