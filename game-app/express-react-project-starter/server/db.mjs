import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");

export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });

export const getPlayers = () => db.any("SELECT * FROM players");

export const addScore = (player) => db.one("UPDATE players SET score = score + 1 WHERE player_id = ${player} RETURNING *", player);

  // TODO: Add route to increment score
  // export const addPlayer = (score) =>
  // db.one("INSERT INTO players(score) VALUES(${score}) RETURNING *", { score });


function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
