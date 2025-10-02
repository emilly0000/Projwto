import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/fundo.png")} // fundo.png em assets/
      style={styles.background}
      blurRadius={3}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.title}>Sobre o Projeto</Text>

          <Text style={styles.paragraph}>
            Este projeto foi criado como parte de uma atividade escolar com o objetivo de explorar os{" "}
            <Text style={styles.bold}>impactos ambientais causados pela produção industrial</Text>. 
            Buscamos compreender os efeitos dessa prática e propor soluções mais conscientes.
          </Text>

          <Text style={styles.paragraph}>
            Analisamos como o uso excessivo de recursos naturais, a emissão de poluentes e a geração de resíduos 
            impactam o planeta de forma alarmante. É essencial refletirmos sobre o nosso papel nessa cadeia produtiva.
          </Text>

          <Text style={styles.paragraph}>
            Nosso propósito é <Text style={styles.bold}>conscientizar</Text> e{" "}
            <Text style={styles.bold}>inspirar mudanças</Text>, incentivando ações sustentáveis em diversos setores 
            e construindo juntos um futuro mais verde, justo e equilibrado.
          </Text>

          <Text style={styles.signature}>
            Produzido por Emilly Nogueira, Luise Uchôa, Victor Marcelo, João V. Ramos e Vinicius Rocha.{"\n"}
            — Informática 3.
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate("Início")}>
            <Text style={styles.backLink}>← Voltar para a Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "rgba(244,240,230,0.9)",
    borderRadius: 16,
    padding: 20,
    width: "90%",
    maxWidth: 500,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0A421C",
    textAlign: "center",
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#0A421C",
    paddingBottom: 6,
  },
  paragraph: {
    fontSize: 16,
    color: "#0A421C",
    lineHeight: 22,
    marginBottom: 12,
    textAlign: "justify",
  },
  bold: {
    fontWeight: "bold",
  },
  signature: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "right",
    marginTop: 20,
    color: "#0A421C",
  },
  backLink: {
    marginTop: 16,
    textAlign: "center",
    color: "#0A421C",
    fontWeight: "600",
  },
});
