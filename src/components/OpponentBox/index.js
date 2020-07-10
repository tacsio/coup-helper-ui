import React from "react";
import { View } from "react-native";

import OpponentCard from "./OpponentCard";

import styles from "./styles";

export default function OpponentBox({ opponents }) {
  return (
    <View style={styles.opponents}>
      {opponents.map((opponent) => (
        <OpponentCard key={opponent.id} opponent={opponent} />
      ))}
    </View>
  );
}
