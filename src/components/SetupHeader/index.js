import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import HeaderCircle from "./Circle";

export default function SetupHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Social Isolation COUP</Text>
      <HeaderCircle />
    </View>
  );
}
