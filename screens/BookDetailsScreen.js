import { View, Text, StyleSheet } from "react-native";

export default function BookDetailsScreen({ route }) {
  const { livro } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📚 {livro.titulo}</Text>

      <Text style={styles.info}>👤 Autor: {livro.autor}</Text>

      <Text style={styles.info}>🎓 Curso: {livro.curso}</Text>

      <Text style={styles.descricaoTitulo}>Descrição</Text>

      <Text style={styles.descricao}>{livro.descricao || "Sem descrição"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  info: {
    fontSize: 18,
    marginBottom: 10,
  },

  descricaoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    lineHeight: 24,
  },
});
