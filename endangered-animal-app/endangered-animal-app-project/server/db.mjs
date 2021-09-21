import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

///////////NOTE//////////
//db.mjs is responsible for data access to the PostgreSQL database. The code in this file:
// -Sets up a database client connection.
// -Provides functions that interact with the database.


export const getSpecies = async () => await db.any("SELECT * FROM species");
export const getIndividuals = async () => await db.any("SELECT * FROM individuals");
export const getSightings = async () => await db.any("SELECT * FROM sightings");
//TODO-Add a join to one of these queries. PG-promise, join. 


////////SPECIES-animal is this object///////
export const addSpecies = ({commonName, scientificName, numInWild, conservationStatus, imageUrl, wikiUrl}) =>
db.one("INSERT INTO species(common_name, scientific_name, number_in_wild, conservation_status, image_url, wiki_url) VALUES(${commonName}, ${scientificName}, ${numInWild}, ${conservationStatus},${imageUrl}, ${wikiUrl}) RETURNING *", animal);

//////INDIVIDUALS-ind is this object///////
export const addIndividuals = ({nickName, recordCreated}) =>
db.one("INSERT INTO individuals(nickname, record_created) VALUES(${nickName}, ${recordCreated}) RETURNING *", ind);


//////SIGHTINGS-seen is this object///////
export const addSightings = (sighting) =>
db.one("INSERT INTO sightings(date_time, sighting_location, is_healthy, sighter_email) VALUES(${dateTime}, ${sightingLocation}, ${isHealthy}, ${sighterEmail}) RETURNING *", sighting);

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
