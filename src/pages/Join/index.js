import React, { useState, useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import GameContext from "../../GameContext";

import styles from "./styles";
import defaultStyles from "../defaultStyles";

import SetupHeader from "../../components/SetupHeader";
import ActionButton from "../../components/ActionButton";
import RulesBox from "../../components/RulesBox";

import { getRegrasPartida } from "../../services/rulesService";
import { joinGame } from "../../services/gameService";

export default function Join() {
  const { signGame } = useContext(GameContext);

  const navigation = useNavigation();
  const route = useRoute();

  const nomeJogador = route.params.nomeJogador;

  const [codigoPartida, setCodigoPartida] = useState("");
  const [codigoValido, setCodigoValido] = useState(false);
  const [regras, setRegras] = useState(undefined);

  async function handleSearch(codigo) {
    setCodigoPartida(codigo);

    if (codigo.length > 4) {
      setCodigoPartida(codigo);

      try {
        const response = await getRegrasPartida(codigo);
        setRegras(response);
        setCodigoValido(true);
      } catch (error) {
        setRegras(undefined);
        setCodigoValido(false);
        showMessage(error);
      }
    }
  }

  async function handleJoin() {
    try {
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
        <Text style={defaultStyles.formLabel}>Código da Partida</Text>
        <TextInput
          style={[defaultStyles.formInput, styles.formInput]}
          value={codigoPartida}
          placeholder="Digite o código da partida"
          onChangeText={(id) => handleSearch(id.trim())}
          autoFocus={true}
        />

        {regras && <RulesBox rules={regras} />}
      </View>

      <View style={defaultStyles.actions}>
        <ActionButton text="Voltar" onPress={() => navigation.goBack()} />

        <ActionButton
          disabled={codigoValido === false}
          text="Entrar"
          onPress={() => handleJoin()}
        />
      </View>

      <FlashMessage position="bottom" />
    </View>
  );
}
