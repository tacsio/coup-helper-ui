import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function HeaderNavigation({ codigoPartida }) {
  const navitagion = useNavigation();

  function handleSair() {
    console.log("sair partida");
  }

  return (
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
  );
}
