document.addEventListener("DOMContentLoaded", async function () {
  try {
    const dogs = await fetchAllDogs();
    const id = getDogIdFromURL();

    const dog = dogs[id];
    document.getElementById("dog-name").textContent = dog.name;

    document.getElementById("dog-image").src = dog.first_image_url;
    document.getElementById("dog-image").alt = dog.name;

  } catch (error) {
    console.error("Error loading dogs:", error);
  }
});