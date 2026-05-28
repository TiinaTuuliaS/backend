import axios from 'axios';

const overpassQuery = `
[out:json][timeout:10];
node["tourism"="camp_site"](60.313,24.514,60.314,24.515);
out;
`;

async function fetchNuuksioData() {
  try {
  const response = await axios.post(
  'https://overpass.kumi.systems/api/interpreter',
  overpassQuery,
  {
    headers: {
      'Content-Type': 'text/plain',
      'User-Agent': 'RetkeilyApp/1.0',
    },
  }
);

    console.log(response.data);
  } catch (error: any) {
    console.error(
      error.response?.data || error.message
    );
  }
}

fetchNuuksioData();