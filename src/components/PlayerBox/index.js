import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import PlayerCard from "./PlayerCard";

import styles from "./styles";

export default function PlayerBox({
  cards,
  ammount,
  plusHandler,
  minusHandler,
  ambassadorHandler,
  myRound,
  uncoverCard,
  terminateCard,
}) {
  return (
    <View style={styles.playerAction}>
      <View style={styles.playerInfo}>
        <Text style={styles.playerCoin}>
          {ammount}
          <Feather size={10} name="dollar-sign" />
        </Text>

        <TouchableOpacity
          style={[styles.coinAction, styles.plusAction]}
          onPress={plusHandler}
        >
          <Feather name="plus" size={15} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.coinAction, styles.minusAction]}
          onPress={minusHandler}
        >
          <Feather name="minus" size={15} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={myRound ? styles.ambassadorAction : styles.disabled}
          onPress={ambassadorHandler}
          disabled={!myRound}
        >
          <Feather name="inbox" size={32} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.playerCards}>
        {cards &&
          cards.map((card) => (
            <PlayerCard
              key={card.id}
              card={card}
              uncoverCard={uncoverCard}
              terminateCard={terminateCard}
            />
          ))}
      </View>
    </View>
  );
}
