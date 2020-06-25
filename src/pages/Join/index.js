import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";

import SetupHeader from "../../components/SetupHeader";
import ActionButton from "../../components/ActionButton";
import RulesBox from "../../components/RulesBox";

export default function Join() {
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
    console.log("join");
    //TODO: navegar para partida
  }
  return (
    <View style={styles.container}>
      <SetupHeader />

      <View style={styles.main}>
        <Text style={styles.formLabel}>Código da Partida</Text>
        <TextInput
          style={styles.formInput}
          value={idParitda}
          placeholder="Digite o código da partida"
          onChangeText={setIdPartida}
          autoFocus={true}
        />

        {regras && <RulesBox rules={regras} />}
      </View>

      <View style={styles.actions}>
        <ActionButton
          disabled={codigoValido === false}
          text="Entrar"
          onPress={() => handleJoin()}
        />
      </View>
    </View>
  );
}
