import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function AmbassadorBox({ cards }) {
  const selections = cards.length - 2;

  const [selectedCards, setSelectedCards] = useState([]);

  function handleSelectCards(card) {
    let cards = [...selectedCards.filter((it) => it !== card)];

    if (!selectedCards.includes(card)) {
      cards.push(card);
    }

    setSelectedCards(cards);
  }

  function selectionCompleted() {
    return selectedCards.length === selections;
  }

  return (
    <View style={styles.main}>
      <Text style={styles.info}>
        Selecionar {selections - selectedCards.length}:
      </Text>

      <View style={styles.options}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card}
            disabled={selectionCompleted() && !selectedCards.includes(card)}
            style={[
              styles.button,
              selectedCards.includes(card)
                ? styles.selected
                : styles.notSelected,
            ]}
            onPress={() => handleSelectCards(card)}
          >
            <Text style={styles.buttonText}>{card}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.action}>
        <TouchableOpacity
          disabled={!selectionCompleted()}
          style={[
            styles.shadow,
            !selectionCompleted() ? styles.disabled : styles.actionButton,
          ]}
        >
          <Text style={styles.actionButtonText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
