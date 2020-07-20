import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function OpponentCard({ selected, opponent }) {
  return (
    <View
      style={[
        styles.card,
        selected ? styles.selected : styles.normal,
        opponent.eliminado && styles.terminated,
      ]}
    >
      <Text style={styles.name}>{opponent.nome}</Text>

      <View style={styles.info}>
        <View style={styles.cards}>
          {opponent.cartas.map((carta) => (
            <Text key={carta.id} style={styles.cardName}>
              {carta.name}
            </Text>
          ))}
        </View>

        <Text style={styles.coins}>
          {opponent.moedas}
          <Feather size={10} name="dollar-sign" />
        </Text>
      </View>
    </View>
  );
}
