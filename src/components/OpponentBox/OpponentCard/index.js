import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function OpponentCard({ selected, opponent }) {
  return (
    <View
      style={
        selected ? [styles.card, styles.selected] : [styles.card, styles.normal]
      }
    >
      <Text style={styles.name}>{opponent.nome}</Text>

      <View style={styles.info}>
        <View style={styles.cards}>
          <Text style={styles.cardName}>{opponent.cartas[0]}</Text>
          <Text style={styles.cardName}>{opponent.cartas[1]}</Text>
        </View>

        <Text style={styles.coins}>
          {opponent.moedas}
          <Feather size={10} name="dollar-sign" />
        </Text>
      </View>
    </View>
  );
}
