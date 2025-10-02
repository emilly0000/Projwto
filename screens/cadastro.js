import React, { useState } from "react";
import {
  View, Text, TextInput, StyleSheet,
  ImageBackground, TouchableOpacity, Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signup } from "./fakebackend";

export default function Cadastro() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const handleSignup = () => {
  setError("");
  const res = signup({ name, email, password });
  if (res.ok) {
    Alert.alert("Sucesso!", "Cadastro feito com sucesso! Faça login.");
    navigation.replace("Login");
  } else {
    setError(res.message);
  }
};

  return (
    <ImageBackground
      source={require("../assets/fundo.png")}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Cadastro</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor="#0A421C99"
          value={name} onChangeText={setName} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Digite seu email" placeholderTextColor="#0A421C99"
          value={email} onChangeText={setEmail} keyboardType="email-address" />

        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="Crie uma senha" placeholderTextColor="#0A421C99"
          value={password} onChangeText={setPassword} secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.backLink}>← Voltar para Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "center", alignItems: "center" },
  card: {
    backgroundColor: "rgba(244,240,230,0.85)",
    padding: 20,
    borderRadius: 16,
    width: "85%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#0A421C", textAlign: "center", marginBottom: 20 },
  error: { color: "red", textAlign: "center", marginBottom: 10 },
  label: { fontWeight: "600", color: "#0A421C", marginBottom: 4 },
  input: { borderWidth: 1, borderColor: "#00000020", borderRadius: 8, padding: 10, marginBottom: 12, backgroundColor: "rgba(255,255,255,0.9)", color: "#000" },
  button: { backgroundColor: "#0A421C", paddingVertical: 12, borderRadius: 8, marginBottom: 12 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  backLink: { textAlign: "center", color: "#0A421C", fontWeight: "600", marginTop: 10 },
});
