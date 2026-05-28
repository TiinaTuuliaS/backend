import fs from 'fs';

const rawData = fs.readFileSync(
  './data/nuuksio.geojson',
  'utf-8'
);

const geojson = JSON.parse(rawData);

console.log(geojson);

geojson.features.forEach((feature: any) => {
  console.log('Nimi:', feature.properties.name);
  console.log('Tyyppi:', feature.properties.type);
  console.log(
    'Koordinaatit:',
    feature.geometry.coordinates
  );

  console.log('---');
});