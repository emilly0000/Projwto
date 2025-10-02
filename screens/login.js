import React, { useState } from "react";
import {
  View, Text, TextInput, StyleSheet,
  ImageBackground, TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { login } from "./fakebackend";

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    const res = login({ email, password: senha });
    if (res.ok) {
      navigation.replace("Dashboard", { user: { name: "Emilly", email: "emilly@email.com" } });
    } else {
      setError(res.message);
    }
  };

  return (
    <ImageBackground source={require("../assets/fundo.png")} style={styles.background} blurRadius={3}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#0A421C99"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#0A421C99"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        {/* Esqueceu a senha */}
        <TouchableOpacity style={styles.forgotContainer} onPress={() => navigation.navigate("RecuperarSenha")}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.centerText}>
          Não tem login?{" "}
          <Text style={styles.link} onPress={() => navigation.navigate("Cadastro")}>Cadastre-se</Text>
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Início")}>
          <Text style={styles.backLink}>← Voltar para a Home</Text>
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
  title: { fontSize: 24, fontWeight: "bold", color: "#0A421C", textAlign: "center", marginBottom: 20 },
  error: { color: "red", textAlign: "center", marginBottom: 10 },
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
  forgotContainer: { alignSelf: "flex-end", marginBottom: 10 },
  forgotText: { fontSize: 13, color: "#0A421C", textDecorationLine: "underline" },
  button: { backgroundColor: "#0A421C", paddingVertical: 12, borderRadius: 8, marginBottom: 12 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
  centerText: { textAlign: "center", marginBottom: 10, color: "#0A421C" },
  link: { fontWeight: "600", color: "#0A421C", textDecorationLine: "underline" },
  backLink: { textAlign: "center", color: "#0A421C", fontWeight: "600", marginTop: 10 }
});
