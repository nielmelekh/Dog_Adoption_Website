const BASE_URL = "https://ac234adb-7a50-4b42-b90b-48aadd12183e.mock.pstmn.io/";

async function fetchAllDogs() {
  const response = await fetch(`${BASE_URL}/dogs`);
  if (!response.ok) {
    throw new Error("Failed to fetch dogs");
  }
  return await response.json();
}

function getDogIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function formatBoolean(value) {
  if (value === true) {
    return "Yes";
  }
  if (value === false) {
    return "No";
  }
  return "Unknown";
}