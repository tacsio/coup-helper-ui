import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function PlayerCard() {
  return (
    <View style={styles.playerCard}>
      <Text style={styles.cardName}>Condessa</Text>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Revelar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Trocar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
}
