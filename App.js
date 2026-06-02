import { useEffect } from "react"; //executa código automaticamente
import { criarTabela } from "./database/database"; //responsável por criar a tabela livros no SQLite
import { NavigationContainer } from "@react-navigation/native"; //principal, controla todas as mudanças de tela
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //sistema de navegação

import HomeScreen from "./screens/HomeScreen";
import AddBookScreen from "./screens/AddBookScreen";
import EditBookScreen from "./screens/EditBookScreen";
import AboutScreen from "./screens/AboutScreen";
import BookDetailsScreen from "./screens/BookDetailsScreen";
//acima tem todos os import ne padraozinho

const Stack = createNativeStackNavigator(); //criando o navegador

export default function App() {
  // onde a parada comeca
  useEffect(() => {
    criarTabela(); //criar tabela
  }, []); // executar 1 vez

  return (
    //navegacao do app
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
