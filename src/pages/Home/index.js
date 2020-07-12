import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FlashMessage, { showMessage } from "react-native-flash-message";

import defaultStyles from "../defaultStyles";

import SetupHeader from "../../components/SetupHeader";
import ActionButton from "../../components/ActionButton";

import GameContext from "../../GameContext";
import { gameStatus } from "../../services/gameService";

export default function Home() {
  const { gameAuth } = useContext(GameContext);

  const [nomeJogador, setNomeJogador] = useState("");

  const navigation = useNavigation();

  //search for existing game
  useEffect(() => {
    if (gameAuth) {
      const { gameCode, playerId } = gameAuth;

      gameStatus(gameCode, playerId)
        .then((statusPartida) => {
          navigation.navigate("Game", { statusPartida });
        })
        .catch((error) => {
          showMessage({
            message: error,
            type: "danger",
            duration: 3000,
            icon: "danger",
          });
        });
    }
  }, [gameAuth]);

  function handleCreate() {
    navigation.navigate("Create", { nomeJogador: nomeJogador.trim() });
  }

  function handleJoin() {
    navigation.navigate("Join", { nomeJogador: nomeJogador.trim() });
  }

  return (
    <View style={defaultStyles.container}>
      <SetupHeader />

      <View style={defaultStyles.main}>
        <Text style={defaultStyles.formLabel}>Nome</Text>
        <TextInput
          style={defaultStyles.formInput}
          value={nomeJogador}
          placeholder="Digite o seu nome"
          onChangeText={setNomeJogador}
        />
      </View>

      <View style={defaultStyles.actions}>
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

      <FlashMessage position="bottom" />
    </View>
  );
}
