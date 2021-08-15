import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "./styles";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Pagina principal</Text>
      {/* <TouchableOpacity onPress={navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity> */}
    </View>
  );
}
