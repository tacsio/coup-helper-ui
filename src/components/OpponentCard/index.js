import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default function OpponentCard({ selected }) {
  return (
    <View style={selected ? styles.selected : styles.card}>
      <Text style={styles.name}>Kamijo Touma</Text>

      <View style={styles.info}>
        <View style={styles.cards}>
          <Text style={styles.cardName}>Embaixador</Text>
          <Text style={styles.cardName}>???</Text>
        </View>

        <Text style={styles.coins}>(2 G)</Text>
      </View>
    </View>
  );
}
