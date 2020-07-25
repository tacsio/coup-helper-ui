import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { FontAwesome5 } from "@expo/vector-icons";
import GameContext from "../../GameContext";

import styles from "./styles";

import HeaderNavigation from "../../components/HeaderNavigation";
import PlayerBox from "../../components/PlayerBox";
import ActionButton from "../../components/ActionButton";
import AmbassadorBox from "../../components/AmbassadorBox";
import OpponentBox from "../../components/OpponentBox";

import {
  gameStatus,
  quitGame,
  incrementCoin,
  decrementCoin,
  endMyRound,
  uncoverCard,
  terminateCard,
  changeCard,
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
  const [winner, setWinner] = useState(undefined);

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
    searchWinner();
  }, [statusPartida]);

  function getRoundTitle() {
    let title = "";
    if (winner) {
      title = `Vencedor: ${winner.nome}`;
    } else if (statusPartida.idJogadorDaVez === -1) {
      title = "Aguardando jogadores";
    } else {
      const playerName = statusPartida.nomeJogadorDaVez;
      title = myRound ? `Sua rodada, ${playerName}` : `Rodada de ${playerName}`;
    }

    return title;
  }
  function searchWinner() {
    if (statusPartida.statusPartida === "FINALIZADA") {
      const players = [
        ...statusPartida.adversarios,
        {
          nome: statusPartida.nomeJogador,
          eliminado: statusPartida.eliminado,
        },
      ];
      const winner = players.find((player) => !player.eliminado);
      setWinner(winner);
    }

    return undefined;
  }

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

  /** Card actions **/
  async function handleUncoverCard(idCard) {
    try {
      const newState = await uncoverCard(statusPartida.idJogador, idCard);
      setStatusPartida(newState);
    } catch (error) {
      showMessage(error);
    }
  }

  async function handleTerminateCard(idCard) {
    try {
      const newState = await terminateCard(statusPartida.idJogador, idCard);
      setStatusPartida(newState);
    } catch (error) {
      showMessage(error);
    }
  }

  async function handleChangeCard(idCard) {
    try {
      const newState = await changeCard(statusPartida.idJogador, idCard);
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
        <Text style={styles.title}>
          Social Isolation COUP{" "}
          <FontAwesome5 name="chess" color="#402160" size={34} />
        </Text>
      </View>

      <View style={styles.main}>
        <View style={styles.roundInfo}>
          <Text style={styles.labelRound}>
            {winner && <FontAwesome5 name="crown" color="#402160" size={21} />}{" "}
            {getRoundTitle()}{" "}
            {winner && <FontAwesome5 name="crown" color="#402160" size={21} />}
            {!winner && !myRound && (
              <FontAwesome5 name="clock" color="#402160" size={21} />
            )}
            {myRound && <FontAwesome5 name="dice" color="#402160" size={21} />}
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
        <PlayerBox
          cards={statusPartida.cartas}
          ammount={statusPartida.moedas}
          plusHandler={handleIncrementCoin}
          minusHandler={handleDecrementCoin}
          ambassadorHandler={handleAmbassadorAction}
          myRound={myRound}
          uncoverCard={(idCard) => handleUncoverCard(idCard)}
          terminateCard={(idCard) => handleTerminateCard(idCard)}
          changeCard={(idCard) => handleChangeCard(idCard)}
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
