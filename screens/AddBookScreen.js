import { inserirLivro } from "../database/database"; // salva o livro
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function AddBookScreen() {
  const [titulo, setTitulo] = useState(""); // cada campo aqui organiza as variaveis, bem simples
  const [autor, setAutor] = useState("");
  const [curso, setCurso] = useState("");
  const [descricao, setDescricao] = useState("");

  function salvarLivro() {
    // funcao aqui salva o livro desde que tenha titulo e autor fora isso da erro
    if (!titulo || !autor) {
      Alert.alert("Erro", "Preencha título e autor.");
      return;
    }

    inserirLivro(titulo, autor, curso, descricao); // envia os dados

    Alert.alert("Sucesso", "Livro cadastrado com sucesso!");

    setTitulo("");
    setAutor("");
    setCurso("");
    setDescricao("");
  }

  return (
    // aqui tem os campos, recebe o nome respectivamente, titulo, autor, e etc
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Livro</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Autor"
        value={autor}
        onChangeText={setAutor}
      />

      <TextInput
        style={styles.input}
        placeholder="Curso"
        value={curso}
        onChangeText={setCurso}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TouchableOpacity style={styles.botao} onPress={salvarLivro}>
        <Text style={styles.textoBotao}>Salvar Livro</Text>
      </TouchableOpacity>
    </View> // aqui em cima um botao de salvar livro
  );
}

const styles = StyleSheet.create({
  //aqui em baixo os styles
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
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});
