import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getEvents = async () => await db.any("SELECT * FROM events");

export const addEvent = (event) =>
    // See docs on RETURNING: https://www.postgresql.org/docs/9.5/dml-returning.html
    // pgp VALUES allow named values from the object following query instead of ${1}, from array.
    // pgp.any docs: https://vitaly-t.github.io/pg-promise/database.js.html#line583
    db.any("INSERT INTO events(name, category) VALUES(${name}, ${category}) RETURNING *", 
      event,
    );

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
