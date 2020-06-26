import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./styles";

import HeaderNavigation from "../../components/HeaderNavigation";
import OpponentCard from "../../components/OpponentCard";

export default function Game() {
  const [codigoPartida, setCodigoPartida] = useState();
  const [opponents, setOpponents] = useState([]);

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
    ];
    setCodigoPartida("3D41j");
    setOpponents(op);
  }, []);

  return (
    <View style={styles.container}>
      <HeaderNavigation codigoPartida={codigoPartida} />

      <View style={styles.header}>
        <Text style={styles.title}>Social Isolation COUP</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.roundInfo}>
          <Text style={styles.labelRound}>Rodada de </Text>
          <Text style={styles.playerRound}>Misaka Mikoto </Text>
        </View>

        <FlatList
          style={styles.opponets}
          data={opponents}
          keyExtractor={(opponent) => opponent.id.toString()}
          renderItem={(opponent) => <OpponentCard opponent={opponent} />}
        />
        <View style={styles.playerAction}></View>
      </View>

      <View style={styles.action}></View>
    </View>
  );
}
