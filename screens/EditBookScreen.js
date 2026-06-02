import React, { useState } from "react";
import { atualizarLivro } from "../database/database";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function EditBookScreen({ route, navigation }) {
  const { livro } = route.params;

  const [titulo, setTitulo] = useState(livro.titulo);
  const [autor, setAutor] = useState(livro.autor);
  const [curso, setCurso] = useState(livro.curso);
  const [descricao, setDescricao] = useState(livro.descricao || "");

  function salvarEdicao() {
    atualizarLivro(livro.id, titulo, autor, curso, descricao);

    Alert.alert("Sucesso", "Livro atualizado!");

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Editar Livro</Text>

      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />

      <TextInput style={styles.input} value={autor} onChangeText={setAutor} />

      <TextInput style={styles.input} value={curso} onChangeText={setCurso} />

      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableOpacity style={styles.botao} onPress={salvarEdicao}>
        <Text style={styles.textoBotao}>Salvar Alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  botao: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
