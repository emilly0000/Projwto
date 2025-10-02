
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

export default function Dashboard({ route, navigation }) {
  const scrollRef = useRef();
// linha do user
const { user } = route.params || { user: { name: "Usuário", email: "usuario@teste.com" } };

  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "introducao", label: "Introdução", bg: "#F4F0E6" },
    { id: "artigos", label: "📚 Artigos", bg: "#EAF6EA" },
    { id: "infograficos", label: "📊 Infográficos", bg: "#DFF2D8" },
    { id: "quiz", label: "❓ Quiz", bg: "#CEF0C2" },
    { id: "dicas", label: "💡 Dicas", bg: "#BEE5B0" },
  ];

  const scrollToSection = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        y: index * 600,
        animated: true,
      });
    }
    setMenuOpen(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header fixo */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: "https://img.icons8.com/color/96/environment-care.png" }}
            style={styles.logo}
          />
          <Text style={styles.userName}>{user.name || user.email}</Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
            <Text style={styles.menuBtn}>☰</Text>
          </TouchableOpacity>
          <TouchableOpacity
  onPress={() => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  }}
  style={styles.logoutBtn}
>
  <Text style={styles.logoutText}>Sair</Text>
</TouchableOpacity>

        </View>
      </View>

      {/* Menu dropdown */}
      {menuOpen && (
        <View style={styles.menuDropdown}>
          {sections.slice(1).map((sec, i) => (
            <TouchableOpacity key={sec.id} onPress={() => scrollToSection(i + 1)}>
              <Text style={styles.menuItem}>{sec.label.replace(/[^a-zA-ZÀ-ú ]/g, "")}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Conteúdo scrollável */}
      <ScrollView ref={scrollRef} contentContainerStyle={{ paddingTop: 80 }}>
        {/* Introdução com blur */}
        <ImageBackground
          source={require("../assets/dash.jpg")}
          style={styles.introSection}
          blurRadius={3}
        >
          <View style={styles.introOverlay}>
            <Text style={styles.introTitle}>Bem-vindo(a)!</Text>
            <Text style={styles.introText}>
              Aqui você pode explorar conteúdos educativos, artigos, infográficos, quizzes e dicas para entender os impactos ambientais da produção industrial e aprender práticas mais sustentáveis.
            </Text>
            <TouchableOpacity onPress={() => scrollToSection(1)} style={styles.startBtn}>
              <Text style={styles.startBtnText}>Começar a Explorar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Demais seções */}
        {sections.slice(1).map((section, index) => (
          <View key={section.id} style={[styles.section, { backgroundColor: section.bg }]}>
            <Text style={styles.sectionTitle}>{section.label}</Text>
            <Text style={styles.sectionText}>Conteúdo da seção {section.label} ficará aqui.</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#0A421C",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    zIndex: 10,
  },
  logoContainer: { flexDirection: "row", alignItems: "center" },
  logo: { width: 40, height: 40, marginRight: 8 },
  userName: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  menuBtn: { color: "#fff", fontSize: 28, marginRight: 16 },
  logoutBtn: { color: "#fff", fontWeight: "bold" },
  menuDropdown: {
    position: "absolute",
    top: 70,
    right: 16,
    backgroundColor: "#0A421C",
    padding: 10,
    borderRadius: 8,
    zIndex: 9,
  },
  menuItem: { color: "#fff", paddingVertical: 6, fontWeight: "600" },
  introSection: { height: 600, justifyContent: "center", alignItems: "center" },
  introOverlay: {
    backgroundColor: "rgba(244,240,230,0.85)",
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 20,
    alignItems: "center",
  },
  introTitle: { fontSize: 28, fontWeight: "bold", color: "#0A421C", marginBottom: 12, textAlign: "center" },
  introText: { fontSize: 16, color: "#0A421C", textAlign: "center", marginBottom: 20 },
  startBtn: { backgroundColor: "#0A421C", paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8 },
  startBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  section: { height: 600, justifyContent: "center", alignItems: "center", paddingHorizontal: 16 },
  sectionTitle: { fontSize: 26, fontWeight: "bold", color: "#0A421C", marginBottom: 12 },
  sectionText: { fontSize: 16, textAlign: "center" },
});
