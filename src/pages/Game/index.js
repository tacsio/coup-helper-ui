import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import HeaderNavigation from "../../components/HeaderNavigation";
import OpponentCard from "../../components/OpponentCard";
import PlayerCard from "../../components/PlayerCard";
import ActionButton from "../../components/ActionButton";

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

        <ScrollView>
          <View style={styles.opponents}>
            {opponents.map((opponent) => (
              <OpponentCard key={opponent.id} opponent={opponent} />
            ))}
          </View>

          <View style={styles.playerAction}>
            <View style={styles.playerInfo}>
              <Text style={styles.playerCoin}>
                5
                <Feather size={10} name="dollar-sign" />
              </Text>

              <TouchableOpacity style={[styles.coinAction, styles.plusAction]}>
                <Feather name="plus" size={15} color="#FFF" />
              </TouchableOpacity>

              <TouchableOpacity style={[styles.coinAction, styles.minusAction]}>
                <Feather name="minus" size={15} color="#FFF" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.ambassadorAction}>
                <Feather name="inbox" size={32} color="#FFF" />
              </TouchableOpacity>
            </View>

            <View style={styles.playerCards}>
              <PlayerCard />
              <PlayerCard />
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.action}>
        <ActionButton text="Finalizar Turno" />
      </View>
    </View>
  );
}
