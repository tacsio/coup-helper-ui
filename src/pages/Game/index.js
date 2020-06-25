import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";

import OpponentCard from "../../components/OpponentCard";

export default function Game() {
  const navitagion = useNavigation();
  const route = useRoute();

  const [codigoPartida, setCodigoPartida] = useState();

  //carrega id partida da rota
  useEffect(() => {
    //TODO: ajustar dados da rota
    // const codigo = route.params.codigoPartida;
    // setCodigoPartida(codigo);
    //! TODO: remover
    setCodigoPartida("3D41j");
  }, []);

  function handleSair() {
    console.log("sair partida");
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navitagion.goBack()}>
          <Feather name="chevron-left" color="#402160" size={32} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.clipboard}>
          <Text style={styles.clipboardText}>{`ID: ${codigoPartida}`}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSair()}>
          <Feather name="log-out" color="#402160" size={32} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Social Isolation COUP</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.roundInfo}>
          <Text style={styles.labelRound}>Rodada de </Text>
          <Text style={styles.playerRound}>Misaka Mikoto </Text>
        </View>
        <ScrollView style={styles.opponets}>
          <OpponentCard />
          <OpponentCard selected />
          <OpponentCard />
          <OpponentCard />
          <OpponentCard />
          <OpponentCard />
        </ScrollView>
        <View style={styles.playerAction}></View>
      </View>

      <View style={styles.action}></View>
    </View>
  );
}
