import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

import logo from "../../../assets/logo.png";
import Button from "../../components/Button";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} />
      <View style={styles.containerInput}>
        <TextInput
          nome="user"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          nome="user"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email"
          style={styles.input}
        />
      </View>
      <Button style="outline" Press={false}>
        <Text
          style={styles.textPrimary}
          onPress={() => navigation.navigate("Index")}
        >
          ENTRAR
        </Text>
      </Button>
      <TouchableOpacity
        style={styles.redefinePass}
        onPress={() => navigation.navigate("RedefinePass")}
      >
        <Text style={styles.textPrimary}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}
