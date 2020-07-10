import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import PlayerCard from "./PlayerCard";

import styles from "./styles";

export default function PlayerAction({ ambassadorHandler }) {
  return (
    <View style={styles.playerAction}>
      <View style={styles.playerInfo}>
        <Text style={styles.playerCoin}>
          5
          <Feather size={10} name="dollar-sign" />
        </Text>

        <TouchableOpacity style={[styles.coinAction, styles.plusAction]}>
          <Feather name="plus" size={15} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.coinAction, styles.minusAction]}>
          <Feather name="minus" size={15} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ambassadorAction}
          onPress={ambassadorHandler}
        >
          <Feather name="inbox" size={32} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.playerCards}>
        <PlayerCard />
        <PlayerCard />
      </View>
    </View>
  );
}
