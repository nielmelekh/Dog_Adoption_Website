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

    const form = document.getElementById("adoption-form");
    form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());
    
    try {
        // Await the fetch request so the browser waits for it to finish
        const response = await fetch(BASE_URL + "/dogs/" + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        // Check if the server responded with a success status
        if (response.ok) {
            //  Now it is safe to redirect the user
            window.location.href = `thankyou.html?id=${id}`;
        } else {
            alert("Server returned an error. response status: " + response.status);
        }

    } catch (error) {
        console.error("Network error preventing the fetch:", error);
        alert("Network error occurred");
    }
});

  } catch (error) {
    console.error("Error loading dogs:", error);
    alert("Error loading dog information.");
  }
});




