import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Inicial from "./screens/Inicial";
import Login from "./screens/login";
import Cadastro from "./screens/cadastro";
import Sobre from "./screens/sobre";
import Dashboard from "./screens/dashboard";
import RecuperarSenha from "./screens/RecuperarSenha"; // 👈 já importou

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Início"
        onPress={() => props.navigation.navigate("Início")}
        icon={({ color, size }) => (
          <Ionicons name="home-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Login"
        onPress={() => props.navigation.navigate("Login")}
        icon={({ color, size }) => (
          <Ionicons name="log-in-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Cadastro"
        onPress={() => props.navigation.navigate("Cadastro")}
        icon={({ color, size }) => (
          <Ionicons name="person-add-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Dashboard"
        onPress={() => props.navigation.navigate("Dashboard")}
        icon={({ color, size }) => (
          <Ionicons name="grid-outline" color={color} size={size} />
        )}
      />
      <DrawerItem
        label="Sobre"
        onPress={() => props.navigation.navigate("Sobre")}
        icon={({ color, size }) => (
          <Ionicons
            name="information-circle-outline"
            color={color}
            size={size}
          />
        )}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Início"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: "#F4F0E6" },
          headerTintColor: "#0A421C",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Drawer.Screen
          name="Início"
          component={Inicial}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Drawer.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Cadastro" }}
        />
        <Drawer.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: "Sobre" }}
        />

        {/* 👇 Aqui você registra a tela RecuperarSenha */}
        <Drawer.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{ title: "Recuperar Senha", drawerItemStyle: { display: "none" } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
