import { useEffect } from "react";
import { criarTabela } from "./database/database";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AddBookScreen from "./screens/AddBookScreen";
import EditBookScreen from "./screens/EditBookScreen";
import AboutScreen from "./screens/AboutScreen";
import BookDetailsScreen from "./screens/BookDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    criarTabela();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LivroLivre" component={HomeScreen} />

        <Stack.Screen name="Adicionar Livro" component={AddBookScreen} />

        <Stack.Screen name="Editar Livro" component={EditBookScreen} />

        <Stack.Screen name="Sobre o Projeto" component={AboutScreen} />

        <Stack.Screen name="Detalhes do Livro" component={BookDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
