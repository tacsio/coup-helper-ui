import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function AmbassadorBox() {
  const possibilities = 1;

  return (
    <View style={styles.main}>
      <Text style={styles.info}>Selecionar {possibilities}:</Text>

      <View style={styles.options}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Assassino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Capitão</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Embaixador</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
}
