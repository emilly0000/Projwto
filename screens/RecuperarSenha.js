import React, { useState } from "react";
import {
  View, Text, TextInput, StyleSheet,
  ImageBackground, TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RecuperarSenha() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    // simulação de requisição (ajuste com sua API real depois)
    if (email.includes("@")) {
      setStatus("Enviamos um link de recuperação para o seu email.");
    } else {
      setStatus("Erro ao enviar. Verifique o email informado.");
    }
  };

  return (
    <ImageBackground source={require("../assets/fundo.png")} style={styles.background} blurRadius={3}>
      <View style={styles.card}>
        <Text style={styles.title}>Recuperar Senha</Text>

        <Text style={styles.label}>Digite seu Email</Text>
        <TextInput
          style={styles.input}
          placeholder="seuemail@exemplo.com"
          placeholderTextColor="#0A421C99"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar link</Text>
        </TouchableOpacity>

        {status ? <Text style={styles.status}>{status}</Text> : null}

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.backLink}>← Voltar para o Login</Text>
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
    elevation: 5
  },
  title: { fontSize: 22, fontWeight: "bold", color: "#0A421C", textAlign: "center", marginBottom: 20 },
  label: { fontWeight: "600", color: "#0A421C", marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: "#00000020",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    backgroundColor: "rgba(255,255,255,0.9)",
    color: "#000"
  },
  button: { backgroundColor: "#0A421C", paddingVertical: 12, borderRadius: 8, marginBottom: 12 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  status: { textAlign: "center", fontSize: 13, marginTop: 5, color: "#0A421C" },
  backLink: { textAlign: "center", color: "#0A421C", fontWeight: "600", marginTop: 10 }
});
