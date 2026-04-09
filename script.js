//const BASE_URL = "https://ac234adb-7a50-4b42-b90b-48aadd12183e.mock.pstmn.io/";
const BASE_URL = "https://50a9e88f-5dad-414e-9dca-7a7f7152b2e6.mock.pstmn.io";

async function fetchAllDogs() {
    const response = await fetch(`${BASE_URL}/dogs`);
    if (!response.ok) {
    throw new Error("Failed to fetch dogs");
    }
    return await response.json();
}

async function fetchDogById(id) {
    id = parseInt(id) + 1;
    const response = await fetch(`${BASE_URL}/dogs/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch dog number " + id);
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