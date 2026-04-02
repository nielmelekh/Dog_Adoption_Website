document.addEventListener("DOMContentLoaded", async function () {
  try {
    const dogs = await fetchAllDogs();
    const cards = document.querySelectorAll(".dog-card");

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const dog = dogs[i];

      const img = card.querySelector("img");
      const title = card.querySelector("h2");
      const link = card.querySelector("a");

      img.src = dog.first_image_url;
      img.alt = dog.name;

      title.textContent = dog.name;

      link.href = `dog.html?id=${i}`;
      link.textContent = "More Info";
    }
  } catch (error) {
    console.error("Error loading dogs:", error);
  }
});