import React, { useState, useEffect } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";

import SetupHeader from "../../components/SetupHeader";
import RulexBox from "../../components/RulesBox";
import ActionButton from "../../components/ActionButton";

export default function Create() {
  const navigaton = useNavigation();
  const route = useRoute();

  const [numeroJogadores, setNumeroJogadores] = useState("3");
  const [regras, setRegras] = useState({});

  useEffect(() => {
    //TODO: consumir da API
    const rules = {
      qtdCartasBaralho: 20,
      qtdCartasJogador: 8,
      qtdMoedasJogador: 2,
    };

    setRegras(rules);
  }, [numeroJogadores]);

  function handleCreate() {
    //TODO: navegar para partida
    console.log("create");
  }

  return (
    <View style={styles.container}>
      <SetupHeader />

      <View style={styles.main}>
        <Text style={styles.formLabel}>Número de Jogadores</Text>
        <TextInput
          style={styles.formInput}
          keyboardType="numeric"
          value={numeroJogadores}
          onChangeText={setNumeroJogadores}
          autoFocus={true}
          maxLength={2}
        />

        <RulexBox rules={regras} />
      </View>

      <View style={styles.actions}>
        <ActionButton text="Criar" onPress={() => handleCreate()} />
      </View>
    </View>
  );
}
