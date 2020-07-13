import React, { useState, useEffect, useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import GameContext from "../../GameContext";

import styles from "./styles";
import defaultStyles from "../defaultStyles";

import SetupHeader from "../../components/SetupHeader";
import RulexBox from "../../components/RulesBox";
import ActionButton from "../../components/ActionButton";

import { getRegrasCriacao } from "../../services/rulesService";
import { createGame, joinGame } from "../../services/gameService";

export default function Create() {
  const { signGame } = useContext(GameContext);

  const navigation = useNavigation();
  const route = useRoute();

  const nomeJogador = route.params.nomeJogador;

  const [numeroJogadores, setNumeroJogadores] = useState("3");
  const [regras, setRegras] = useState(undefined);

  useEffect(() => {
    if (numeroJogadores === "") {
      setRegras(undefined);
      return;
    }

    getRegrasCriacao(numeroJogadores)
      .then((response) => setRegras(response))
      .catch((error) => {
        setRegras(undefined);
        showMessage(error);
      });
  }, [numeroJogadores]);

  async function handleCreate() {
    try {
      const { codigoPartida } = await createGame(numeroJogadores);
      const statusPartida = await joinGame(codigoPartida, nomeJogador);
      signGame({
        gameCode: statusPartida.codigoPartida,
        playerId: statusPartida.idJogador,
      });
      navigation.navigate("Game", { statusPartida });
    } catch (error) {
      showMessage(error);
    }
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

        {regras && <RulexBox rules={regras} />}
      </View>

      <View style={defaultStyles.actions}>
        <ActionButton text="Voltar" onPress={() => navigation.goBack()} />

        <ActionButton
          disabled={regras === undefined}
          text="Criar"
          onPress={() => handleCreate()}
        />
      </View>

      <FlashMessage position="bottom" />
    </View>
  );
}
