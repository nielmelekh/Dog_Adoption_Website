document.addEventListener("DOMContentLoaded", async function () {
  try {
    const dogs = await fetchAllDogs();
    const id = getDogIdFromURL();

    const dog = dogs[id];
    document.getElementById("heading-dog-name").textContent = dog.name;

    document.getElementById("dog-image").src = dog.first_image_url;
    document.getElementById("dog-image").alt = dog.name;

    document.getElementById("back-btn").addEventListener("click", function () {
        window.location.href = `dog.html?id=${id}`;
    });

    document.getElementById("index-btn").addEventListener("click", function () {
        window.location.href = `index.html`;
    });

    document.getElementById("adoption-form").addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = `thankyou.html?id=${id}`;
    });

  } catch (error) {
    console.error("Error loading dogs:", error);
  }
});




