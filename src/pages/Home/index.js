import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import SetupHeader from "../../components/SetupHeader";
import ActionButton from "../../components/ActionButton";

export default function Home() {
  const [nomeJogador, setNomeJogador] = useState("");

  const navigation = useNavigation();

  function handleCreate() {
    navigation.navigate("Create", { nomeJogador: nomeJogador.trim() });
  }

  function handleJoin() {
    navigation.navigate("Join", { nomeJogador: nomeJogador.trim() });
  }

  return (
    <View style={styles.container}>
      <SetupHeader />

      <View style={styles.main}>
        <Text style={styles.formLabel}>Nome</Text>
        <TextInput
          style={styles.formInput}
          value={nomeJogador}
          placeholder="Digite o seu nome"
          onChangeText={setNomeJogador}
        />
      </View>

      <View style={styles.actions}>
        <ActionButton
          disabled={nomeJogador.trim() === ""}
          onPress={() => handleCreate()}
          text="Criar"
        />
        <ActionButton
          disabled={nomeJogador.trim() === ""}
          onPress={() => handleJoin()}
          text="Entrar"
        />
      </View>
    </View>
  );
}
