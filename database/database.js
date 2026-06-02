// Importa a biblioteca SQLite do Expo
import * as SQLite from "expo-sqlite";

// Cria ou abre o banco de dados local chamado livrolivre.db
const db = SQLite.openDatabaseSync("livrolivre.db");

// Cria a tabela de livros caso ela ainda não exista
export function criarTabela() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS livros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      autor TEXT,
      curso TEXT,
      descricao TEXT
    );
  `);
}

// Insere um novo livro no banco de dados
export function inserirLivro(titulo, autor, curso, descricao) {
  db.runSync(
    `INSERT INTO livros (titulo, autor, curso, descricao)
     VALUES (?, ?, ?, ?)`,
    [titulo, autor, curso, descricao],
  );
}

// Retorna todos os livros cadastrados
export function listarLivros() {
  return db.getAllSync("SELECT * FROM livros");
}

// Exclui um livro pelo ID
export function excluirLivro(id) {
  db.runSync("DELETE FROM livros WHERE id = ?", [id]);
}

// Atualiza os dados de um livro existente
export function atualizarLivro(id, titulo, autor, curso, descricao) {
  db.runSync(
    `UPDATE livros
     SET titulo=?, autor=?, curso=?, descricao=?
     WHERE id=?`,
    [titulo, autor, curso, descricao, id],
  );
}
