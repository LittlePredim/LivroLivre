import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
  TextInput,
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { listarLivros, excluirLivro } from "../database/database";

export default function HomeScreen({ navigation }) {
  const [livros, setLivros] = useState([]);
  const [busca, setBusca] = useState("");

  useFocusEffect(
    useCallback(() => {
      carregarLivros();
    }, []),
  );

  function carregarLivros() {
    const dados = listarLivros();
    setLivros(dados);
  }
  const livrosFiltrados = livros.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase()),
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.titulo}>📚 LivroLivre</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Sobre o Projeto")}
        >
          <Text style={styles.iconeInfo}>ℹ️</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitulo}>
        Troca de livros acadêmicos entre estudantes
      </Text>
      <Text style={styles.contador}>
        📚 Livros cadastrados: {livros.length}
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Adicionar Livro")}
      >
        <Text style={styles.textoBotao}>Adicionar Livro</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.inputBusca}
        placeholder="🔍 Pesquisar livro..."
        value={busca}
        onChangeText={setBusca}
      />
      <FlatList
        data={livrosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nomeLivro}>{item.titulo}</Text>

            <Text>Autor: {item.autor}</Text>
            <Text>Curso: {item.curso}</Text>
            <Text>Descrição: {item.descricao}</Text>

            <TouchableOpacity
              style={styles.botaoDetalhes}
              onPress={() =>
                navigation.navigate("Detalhes do Livro", {
                  livro: item,
                })
              }
            >
              <Text style={styles.textoBotao}>Detalhes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoEditar}
              onPress={() =>
                navigation.navigate("Editar Livro", {
                  livro: item,
                })
              }
            >
              <Text style={styles.textoBotao}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => {
                Alert.alert("Excluir", "Deseja realmente excluir este livro?", [
                  {
                    text: "Cancelar",
                  },
                  {
                    text: "Excluir",
                    onPress: () => {
                      excluirLivro(item.id);
                      carregarLivros();
                    },
                  },
                ]);
              }}
            >
              <Text style={styles.textoExcluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#e3edff",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 15,

    elevation: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  nomeLivro: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#2563eb",
  },

  botaoExcluir: {
    backgroundColor: "#dc3545",
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  textoExcluir: {
    color: "#fff",
    fontWeight: "bold",
  },
  subtitulo: {
    textAlign: "center",
    color: "#4d4d4d",
    marginBottom: 20,
    fontSize: 18,
  },
  botaoDetalhes: {
    backgroundColor: "#16a34a",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  botaoEditar: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  inputBusca: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  contador: {
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
    color: "#2563eb",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  iconeInfo: {
    fontSize: 20,
  },
});
