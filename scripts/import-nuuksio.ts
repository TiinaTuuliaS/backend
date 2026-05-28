import fs from 'fs';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const rawData = fs.readFileSync(
  './data/nuuksio.geojson',
  'utf-8'
);

const geojson = JSON.parse(rawData);

const client = new Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function importLocations() {
  await client.connect();

  for (const feature of geojson.features) {
    const name = feature.properties.name;
    const type = feature.properties.type;
    const description =
      feature.properties.description;

    const longitude =
      feature.geometry.coordinates[0];

    const latitude =
      feature.geometry.coordinates[1];

   await client.query(
  `
  INSERT INTO locations
  (name, type, description, latitude, longitude, geom)
  VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    ST_SetSRID(ST_MakePoint($5, $4), 4326)
  )
  `,
  [
    name,
    type,
    description,
    latitude,
    longitude,
  ]
);

    console.log('Lisätty:', name);
  }

  await client.end();

  console.log('Import valmis');
}

importLocations();