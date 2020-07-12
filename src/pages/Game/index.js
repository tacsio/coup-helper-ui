import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlashMessage, { showMessage } from "react-native-flash-message";

import styles from "./styles";

import HeaderNavigation from "../../components/HeaderNavigation";
import PlayerAction from "../../components/PlayerAction";
import ActionButton from "../../components/ActionButton";
import AmbassadorBox from "../../components/AmbassadorBox";
import OpponentBox from "../../components/OpponentBox";

import { quitGame } from "../../services/gameService";

//! TODO: remover (vir pela API)
const newCards = ["Capitão", "Duque", "Embaixador", "Condessa"];

export default function Game() {
  const navigation = useNavigation();
  const route = useRoute();

  const [statusPartida, setStatusPartida] = useState({});
  const [ambassadorActionVisible, setAmbassadorActionVisible] = useState(false);

  //initial statue
  useEffect(() => {
    const initialState = route.params.statusPartida;
    setStatusPartida(initialState);
  }, []);

  function handleAmbassadorAction() {
    console.log("embaixador");
    setAmbassadorActionVisible(!ambassadorActionVisible);
  }

  async function handleQuitGame() {
    const { codigoPartida, idJogador } = statusPartida;
    try {
      const out = await quitGame(codigoPartida, idJogador);
      if (out) {
        //* TODO: poderia melhorar aqui com msg para a Home
        navigation.navigate("Home");
      }
    } catch (error) {
      console.log(error);
      showMessage({
        message: error,
        type: "danger",
        duration: 3000,
        icon: "danger",
      });
    }
  }

  return (
    <View style={styles.container}>
      <HeaderNavigation
        codigoPartida={statusPartida.codigoPartida}
        handleQuit={handleQuitGame}
      />

      <View style={styles.header}>
        <Text style={styles.title}>Social Isolation COUP</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.roundInfo}>
          <Text style={styles.labelRound}>Rodada de </Text>
          <Text style={styles.playerName}>
            {statusPartida.nomeJogadorDaVez}
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.actionContainer}
          style={styles.actionArea}
        >
          {ambassadorActionVisible ? (
            <AmbassadorBox cards={newCards} />
          ) : (
            <OpponentBox
              selectedId={statusPartida.idJogadorDaVez}
              opponents={statusPartida.adversarios}
            />
          )}
        </ScrollView>
        <PlayerAction ambassadorHandler={handleAmbassadorAction} />
      </View>

      <View style={styles.action}>
        <ActionButton text="Finalizar Turno" />
      </View>

      <FlashMessage position="bottom" />
    </View>
  );
}
