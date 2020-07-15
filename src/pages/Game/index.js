import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import GameContext from "../../GameContext";

import styles from "./styles";

import HeaderNavigation from "../../components/HeaderNavigation";
import PlayerAction from "../../components/PlayerAction";
import ActionButton from "../../components/ActionButton";
import AmbassadorBox from "../../components/AmbassadorBox";
import OpponentBox from "../../components/OpponentBox";

import {
  gameStatus,
  quitGame,
  incrementCoin,
  decrementCoin,
  endMyRound,
} from "../../services/gameService";

//! TODO: remover (vir pela API)
const newCards = ["Capitão", "Duque", "Embaixador", "Condessa"];

export default function Game() {
  const { signOutGame } = useContext(GameContext);

  const navigation = useNavigation();
  const route = useRoute();

  const [statusPartida, setStatusPartida] = useState({});
  const [myRound, setMyRound] = useState(false);
  const [ambassadorActionVisible, setAmbassadorActionVisible] = useState(false);

  //initial state
  useEffect(() => {
    const initialState = route.params.statusPartida;
    setStatusPartida(initialState);
  }, []);

  //define jogador da vez
  useEffect(() => {
    const idJogador = statusPartida.idJogador;
    const idJogadorDaVez = statusPartida.idJogadorDaVez;

    setMyRound(idJogadorDaVez && idJogador === idJogadorDaVez);
  }, [statusPartida]);

  async function handleUpdateGame() {
    const { codigoPartida, idJogador } = statusPartida;
    try {
      const newStatus = await gameStatus(codigoPartida, idJogador);
      setStatusPartida(newStatus);
    } catch (error) {
      console.error("could not update");
    }
  }

  /** Ingress actions **/
  async function handleQuitGame() {
    const { codigoPartida, idJogador } = statusPartida;
    try {
      const out = await quitGame(codigoPartida, idJogador);
      if (out) {
        //* TODO: poderia melhorar aqui com msg para a Home
        signOutGame();
        navigation.navigate("Home");
      }
    } catch (error) {
      showMessage(error);
    }
  }

  /** Game actions **/
  async function handleIncrementCoin() {
    try {
      const ammount = await incrementCoin(statusPartida.idJogador);

      const newState = { ...statusPartida, moedas: ammount };
      setStatusPartida(newState);
    } catch (error) {
      showMessage(error);
    }
  }

  async function handleDecrementCoin() {
    try {
      const ammount = await decrementCoin(statusPartida.idJogador);

      const newState = { ...statusPartida, moedas: ammount };
      setStatusPartida(newState);
    } catch (error) {
      showMessage(error);
    }
  }

  async function handleEndMyRound() {
    try {
      const newState = await endMyRound(statusPartida.idJogador);
      setStatusPartida(newState);
    } catch (error) {
      showMessage(error);
    }
  }

  /** Ambassador actions **/
  function handleAmbassadorAction() {
    console.log("embaixador");
    console.log(statusPartida);
    setAmbassadorActionVisible(!ambassadorActionVisible);
  }

  return (
    <View style={styles.container}>
      <HeaderNavigation
        codigoPartida={statusPartida.codigoPartida}
        handleUpdate={handleUpdateGame}
        handleQuit={handleQuitGame}
      />

      <View style={styles.header}>
        <Text style={styles.title}>Social Isolation COUP</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.roundInfo}>
          {myRound ? (
            <Text style={styles.labelRound}>
              Sua rodada, {statusPartida.nomeJogadorDaVez}
            </Text>
          ) : (
            <Text style={styles.labelRound}>
              Rodada de {statusPartida.nomeJogadorDaVez}
            </Text>
          )}
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
        <PlayerAction
          ammount={statusPartida.moedas}
          plusHandler={handleIncrementCoin}
          minusHandler={handleDecrementCoin}
          ambassadorHandler={handleAmbassadorAction}
          myRound={myRound}
        />
      </View>

      <View style={styles.action}>
        <ActionButton
          text="Finalizar Turno"
          disabled={!myRound}
          onPress={handleEndMyRound}
        />
      </View>

      <FlashMessage position="bottom" />
    </View>
  );
}
