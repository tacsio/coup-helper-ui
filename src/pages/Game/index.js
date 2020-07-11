import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

import styles from "./styles";

import HeaderNavigation from "../../components/HeaderNavigation";
import PlayerAction from "../../components/PlayerAction";
import ActionButton from "../../components/ActionButton";
import AmbassadorBox from "../../components/AmbassadorBox";
import OpponentBox from "../../components/OpponentBox";

//! TODO: remover (vir pela API)
const newCards = ["Capitão", "Duque", "Embaixador", "Condessa"];

export default function Game() {
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

  return (
    <View style={styles.container}>
      <HeaderNavigation codigoPartida={statusPartida.codigoPartida} />

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
    </View>
  );
}
