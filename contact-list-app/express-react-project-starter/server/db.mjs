import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

////////////////////
export const getTasks = () => db.any("SELECT * FROM tasks");

export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });

///////////////////

export const getContacts = () => db.any("SELECT * FROM contacts");

export const addContacts = (contact) =>
  db.one("INSERT INTO contacts(name, email, phone_number, notes) VALUES(${name}, ${email}, ${phoneNumber}, ${notes}) RETURNING *", contact);

export const editContacts = () => db.any('');
//"UPDATE "my-table" SET "val"=123,"msg"='hello' WHERE id = 1 "
//////////////////

export const getContact = (contact_id) => {
  const sql =  `SELECT *  FROM contacts WHERE id=${contact_id}`;
  return db.one(sql, { contact_id })
};

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
