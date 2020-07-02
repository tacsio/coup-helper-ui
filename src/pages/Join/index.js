import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./styles";
import defaultStyles from "../defaultStyles";

import SetupHeader from "../../components/SetupHeader";
import ActionButton from "../../components/ActionButton";
import RulesBox from "../../components/RulesBox";

import { getRegrasPartida } from "../../services/rulesService";

export default function Join() {
  const navigation = useNavigation();
  const route = useRoute();

  const nomeJogador = route.params.nomeJogador;
  
  const [codigoPartida, setCodigoPartida] = useState("");
  const [codigoValido, setCodigoValido] = useState(false);
  const [regras, setRegras] = useState(undefined);

  async function handleSearch(codigo) {
    setCodigoPartida(codigo);

    if (codigo.length > 4) {
      setCodigoPartida(codigo);

      const regras = await getRegrasPartida(codigo);
      console.log(regras);
      if (regras.error) {
        setRegras(undefined);
        setCodigoValido(false);
        console.log(regras.error);
        //TODO! mensagem erro
      } else {
        setRegras(regras);
        setCodigoValido(true);
      }
    }
  }

  function handleJoin() {
    //TODO: navegar para partida
    console.log("join");
    navigation.navigate("Game");
  }
  return (
    <View style={defaultStyles.container}>
      <SetupHeader />

      <View style={defaultStyles.main}>
        <Text style={defaultStyles.formLabel}>Código da Partida</Text>
        <TextInput
          style={[defaultStyles.formInput, styles.formInput]}
          value={codigoPartida}
          placeholder="Digite o código da partida"
          onChangeText={(id) => handleSearch(id)}
          autoFocus={true}
        />

        {regras && <RulesBox rules={regras} />}
      </View>

      <View style={defaultStyles.actions}>
        <ActionButton
          disabled={codigoValido === false}
          text="Entrar"
          onPress={() => handleJoin()}
        />
      </View>
    </View>
  );
}
