import React from "react";
import { View, Text, TouchableOpacity, Clipboard } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function HeaderNavigation({ codigoPartida, handleQuit }) {
  function handleClipboard() {
    Clipboard.setString(codigoPartida);
  }

  return (
    <View style={styles.navigation}>
      <TouchableOpacity onPress={() => {}}>
        <Feather name="refresh-ccw" color="#402160" size={32} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.clipboard}
        onPress={() => handleClipboard()}
      >
        <Text style={styles.clipboardText}>{`ID: ${codigoPartida}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleQuit()}>
        <Feather name="log-out" color="#402160" size={32} />
      </TouchableOpacity>
    </View>
  );
}
