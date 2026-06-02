import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📚 Sobre o LivroLivre</Text>

      <Text style={styles.texto}>
        O LivroLivre é uma plataforma criada para incentivar a troca de livros
        acadêmicos entre estudantes.
      </Text>

      <Text style={styles.texto}>
        O objetivo é reduzir custos, promover o acesso ao conhecimento e
        estimular a reutilização de materiais educacionais.
      </Text>

      <Text style={styles.texto}>
        Este projeto foi desenvolvido utilizando React Native e SQLite como
        parte da disciplina de Programação para Dispositivos Móveis Android.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#eef4ff",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#2563eb",
  },

  texto: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
});
