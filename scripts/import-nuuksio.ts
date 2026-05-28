import axios from 'axios';

const overpassQuery = `
[out:json];
(
  node["tourism"="camp_site"](60.2,24.4,60.4,24.7);
  node["amenity"="shelter"](60.2,24.4,60.4,24.7);
  node["amenity"="drinking_water"](60.2,24.4,60.4,24.7);
);
out;
`;

async function fetchNuuksioData() {
  try {
    const response = await axios.post(
      'https://overpass-api.de/api/interpreter',
      overpassQuery,
      {
        headers: {
          'Content-Type': 'text/plain',
        },
      }
    );

    console.log(response.data.elements);
  } catch (error) {
    console.error('Virhe haettaessa dataa:', error);
  }
}

fetchNuuksioData();