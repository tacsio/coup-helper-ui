import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default function SetupHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Social Isolation COUP</Text>
    </View>
  );
}
