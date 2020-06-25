import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

export default function RulexBox({ rules }) {
  return (
    <View style={styles.rules}>
      <Text style={styles.ruleText}>
        {`Baralho com ${rules.qtdCartasBaralho} cartas`}
      </Text>
      <Text style={styles.ruleText}>
        {`- ${rules.qtdCartasJogador} para todos os jogadores`}
      </Text>

      <Text style={styles.ruleText}>
        {`- ${
          rules.qtdCartasBaralho - rules.qtdCartasJogador
        } para pilha de cartas`}
      </Text>

      <Text style={styles.ruleText}>
        {`- ${rules.qtdMoedasJogador} moedas para cada jogador`}
      </Text>
    </View>
  );
}
