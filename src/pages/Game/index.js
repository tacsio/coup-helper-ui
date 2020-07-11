import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./styles";

import HeaderNavigation from "../../components/HeaderNavigation";
import PlayerAction from "../../components/PlayerAction";
import ActionButton from "../../components/ActionButton";
import AmbassadorBox from "../../components/AmbassadorBox";
import OpponentBox from "../../components/OpponentBox";

//! TODO: remover (vir pela API)
const newCards = ["Capitão", "Duque", "Embaixador", "Condessa"];

export default function Game() {
  const [codigoPartida, setCodigoPartida] = useState();
  const [opponents, setOpponents] = useState([]);
  const [ambassadorActionVisible, setAmbassadorActionVisible] = useState(
    !false
  ); //TODO: default false

  //carrega id partida da rota
  useEffect(() => {
    //TODO: ajustar dados da rota
    // const codigo = route.params.codigoPartida;
    // setCodigoPartida(codigo);
    //! TODO: remover
    const op = [
      {
        id: 1,
        nome: "Kamijo Touma",
        moedas: 2,
        cartas: ["Embaixador", "???"],
      },
      {
        id: 2,
        nome: "Kuroko Shirai",
        moedas: 10,
        cartas: ["???", "Duque"],
      },
      {
        id: 4,
        nome: "Shiage ",
        moedas: 5,
        cartas: ["???", "???"],
      },
      {
        id: 5,
        nome: "Sasaki Kojiro ",
        moedas: 5,
        cartas: ["???", "???"],
      },
      {
        id: 6,
        nome: "Myamoto Musashi ",
        moedas: 5,
        cartas: ["???", "???"],
      },
      {
        id: 7,
        nome: "Shuho Takuan ",
        moedas: 5,
        cartas: ["???", "???"],
      },
    ];
    setCodigoPartida("3D41j");
    setOpponents(op);
  }, []);

  function handleAmbassadorAction() {
    console.log("embaixador");
    setAmbassadorActionVisible(!ambassadorActionVisible);
  }

  return (
    <View style={styles.container}>
      <HeaderNavigation codigoPartida={codigoPartida} />

      <View style={styles.header}>
        <Text style={styles.title}>Social Isolation COUP</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.roundInfo}>
          <Text style={styles.labelRound}>Rodada de </Text>
          <Text style={styles.playerName}>Misaka Mikoto </Text>
        </View>

        <ScrollView
          contentContainerStyle={styles.actionContainer}
          style={styles.actionArea}
        >
          {ambassadorActionVisible ? (
            <AmbassadorBox cards={newCards} />
          ) : (
            <OpponentBox opponents={opponents} />
          )}
        </ScrollView>
        <PlayerAction ambassadorHandler={handleAmbassadorAction} />
      </View>

      <View style={styles.action}>
        <ActionButton text="Finalizar Turno" />
      </View>
    </View>
  );
}
