document.addEventListener("DOMContentLoaded", async function () {
  try {
    const dogs = await fetchAllDogs();
    const id = getDogIdFromURL();

    const dog = dogs[id];
    document.getElementById("dog-image").src = dog.first_image_url;
    document.getElementById("dog-image").alt = dog.name;

    document.getElementById("heading-name").textContent = dog.name;
    document.getElementById("dog-name").textContent = dog.name;
    document.getElementById("dog-breed").textContent = dog.breed;
    document.getElementById("dog-age").textContent = dog.age;
    document.getElementById("dog-sex").textContent = dog.sex;
    document.getElementById("dog-house-trained").textContent = formatBoolean(dog.house_trained);
    document.getElementById("dog-vaccinated").textContent = formatBoolean(dog.vaccinated);
    document.getElementById("dog-story").textContent = dog.story;

    document.getElementById("prev-btn").addEventListener("click", function () {
      if (id > 0) {
        window.location.href = `dog.html?id=${parseInt(id) - 1}`;
      }
    });
    //document.getElementById("prev-btn").classList.toggle("hidden", id <= 0);
    if (id <= 0) document.getElementById("prev-btn").disabled = true;


    document.getElementById("next-btn").addEventListener("click", function () {
      if (id < dogs.length - 1) {
        window.location.href = `dog.html?id=${parseInt(id) + 1}`;
      }
    });
    //document.getElementById("next-btn").classList.toggle("", id >= dogs.length - 1);
    if (id >= dogs.length - 1) document.getElementById("next-btn").disabled = true;


    document.getElementById("adopt-btn").addEventListener("click", function (e) {
        window.location.href = `adopt.html?id=${id}`;
    });

  } catch (error) {
    console.error("Error loading dogs:", error);
  }
});