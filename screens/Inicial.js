import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function Inicial({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require("../assets/logo.png")} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      <ImageBackground
        source={require('../assets/fundo.png')}
        style={styles.heroBackground}
        blurRadius={3}
        resizeMode="cover"
      >
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Impactos Ambientais na Produção Industrial
          </Text>
          <Text style={styles.heroText}>
            A produção industrial tem um impacto profundo no meio ambiente. 
            Este app explora como fábricas, processos produtivos e consumo de energia 
            afetam nosso planeta – e o que podemos fazer para mudar isso.
          </Text>
          <TouchableOpacity 
            style={styles.heroButton} 
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.heroButtonText}>SAIBA MAIS</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nossa Missão</Text>
        <Text style={styles.cardText}>
          Conscientizar sobre os efeitos da produção industrial no meio ambiente 
          e incentivar práticas mais sustentáveis em todos os setores da sociedade.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Impacto</Text>
        <Text style={styles.cardText}>
          A produção industrial afeta o solo, o ar e a água. Nosso objetivo é mostrar 
          esses impactos e apontar caminhos para reduzir os danos ao planeta.
        </Text>
      </View>

      <Text style={styles.footer}>
        © 2025 EcoIndústria – Todos os direitos reservados.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A421C',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 15,
  },
  menuIcon: {
    fontSize: 24,
    color: '#fff',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  heroBackground: {
    width: '100%',
    height: '90%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  hero: {
    backgroundColor: 'rgba(244, 240, 230, 0.95)',
    padding: 20,
    borderRadius: 12,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A421C',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  heroButton: {
    backgroundColor: '#facc15',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  heroButtonText: {
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    backgroundColor: '#F4F0E6',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0A421C',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  cardLink: {
    fontSize: 14,
    color: '#14532d',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 12,
    color: '#F4F0E6',
  },
});
