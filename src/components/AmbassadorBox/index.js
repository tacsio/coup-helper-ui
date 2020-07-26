import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function AmbassadorBox({ cards, handleChangeCards }) {
  const selections = cards.length - 2;

  const [selectedCards, setSelectedCards] = useState([]);

  function handleSelectCards(cardId) {
    let filteredCards = [...selectedCards.filter((it) => it !== cardId)];

    if (!selectedCards.includes(cardId)) {
      filteredCards.push(cardId);
    }
    setSelectedCards(filteredCards);
  }

  function selectionCompleted() {
    return selectedCards.length === selections;
  }

  function handleSelection() {
    const returnedCardIds = cards
      .filter((it) => !selectedCards.includes(it.id))
      .map((it) => it.id);

    handleChangeCards(returnedCardIds, selectedCards);
  }

  return (
    <View style={styles.main}>
      <Text style={styles.info}>
        Selecionar {selections - selectedCards.length}:
      </Text>

      <View style={styles.options}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            disabled={selectionCompleted() && !selectedCards.includes(card.id)}
            style={[
              styles.button,
              selectedCards.includes(card.id)
                ? styles.selected
                : styles.notSelected,
            ]}
            onPress={() => handleSelectCards(card.id)}
          >
            <Text style={styles.buttonText}>{card.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.action}>
        <TouchableOpacity
          onPress={handleSelection}
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
