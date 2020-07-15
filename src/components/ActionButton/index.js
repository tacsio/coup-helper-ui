import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default function ActionButton({ text, onPress, disabled }) {
  
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[disabled ? styles.disabled : styles.actionButton, styles.shadow]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
