import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function PlayerCard({ card, uncoverCard, terminateCard }) {
  const oculta = card.status === "OCULTA";
  const revelada = card.status === "REVELADA";

  return (
    <View
      style={[
        styles.playerCard,
        oculta ? styles.coveredCard : styles.uncoveredCard,
      ]}
    >
      <Text style={styles.cardName}>{card.name}</Text>

      <TouchableOpacity
        disabled={!oculta}
        style={styles.actionButton}
        onPress={() => uncoverCard(card.id)}
      >
        <Text style={oculta ? styles.actionButtonText : styles.disabledText}>
          Revelar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={card.status !== "REVELADA"}
        style={styles.actionButton}
      >
        <Text style={revelada ? styles.actionButtonText : styles.disabledText}>
          Trocar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        disabled={card.status !== "REVELADA"}
        style={styles.actionButton}
        onPress={() => terminateCard(card.id)}
      >
        <Text style={revelada ? styles.actionButtonText : styles.disabledText}>
          Eliminar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
