import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("livrolivre.db");

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

export function inserirLivro(titulo, autor, curso, descricao) {
  db.runSync(
    `INSERT INTO livros (titulo, autor, curso, descricao)
     VALUES (?, ?, ?, ?)`,
    [titulo, autor, curso, descricao],
  );
}

export function listarLivros() {
  return db.getAllSync("SELECT * FROM livros");
}

export function excluirLivro(id) {
  db.runSync("DELETE FROM livros WHERE id = ?", [id]);
}

export function atualizarLivro(id, titulo, autor, curso, descricao) {
  db.runSync(
    `UPDATE livros
     SET titulo=?, autor=?, curso=?, descricao=?
     WHERE id=?`,
    [titulo, autor, curso, descricao, id],
  );
}
