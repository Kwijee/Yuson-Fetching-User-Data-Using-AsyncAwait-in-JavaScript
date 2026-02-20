// script.js
// This program simulates fetching user data using async/await
// and displays Name, Email, and City on the webpage.


// ===============================
// Simulated API Function
// ===============================

/**
 * getUsers()
 * This async function simulates fetching data from an API.
 * It returns a Promise that resolves with user data
 * after a 1-second delay.
 */
async function getUsers() {

    // Return a new Promise to simulate network request
    return new Promise((resolve, reject) => {

        // Simulate network delay using setTimeout
        setTimeout(() => {
            try {

                // Sample JSON user data (mock API response)
                const data = [
                    {
                        id: 1,
                        name: "Leanne Graham",
                        email: "Sincere@april.biz",
                        address: { city: "Gwenborough" }
                    },
                    {
                        id: 2,
                        name: "Ervin Howell",
                        email: "Shanna@melissa.tv",
                        address: { city: "Wisokyburgh" }
                    },
                    {
                        id: 3,
                        name: "Clementine Bauch",
                        email: "Nathan@yesenia.net",
                        address: { city: "McKenziehaven" }
                    },
                    {
                        id: 4,
                        name: "Patricia Lebsack",
                        email: "Julianne.OConner@kory.org",
                        address: { city: "South Elvis" }
                    },
                    {
                        id: 5,
                        name: "Chelsey Dietrich",
                        email: "Lucio_Hettinger@annie.ca",
                        address: { city: "Roscoeview" }
                    }
                ];

                // Resolve the Promise with the data
                resolve(data);

            } catch (error) {

                // Reject the Promise if an error occurs
                reject("Failed to load user data");
            }

        }, 1000); // 1 second delay to simulate API call

    });
}


// ===============================
// Display Users Function
// ===============================

/**
 * displayUsers()
 * This async function calls getUsers()
 * and displays the user data on the webpage.
 */
async function displayUsers() {

    // Get reference to the HTML container
    const container = document.getElementById("output");

    try {

        // Await the user data from the simulated API
        const users = await getUsers();

        // Loop through each user in the array
        users.forEach(user => {

            // Create a new div element for each user
            const div = document.createElement("div");
            div.classList.add("user");

            // Insert Name, Email, and City into the div
            div.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            `;

            // Append the div to the container
            container.appendChild(div);
        });

    } catch (error) {

        // If an error occurs, display error message on webpage
        container.innerHTML = `<p class="error">${error}</p>`;

        // Log error in browser console for debugging
        console.error(error);
    }
}


// ===============================
// Function Call
// ===============================

// Call displayUsers() when the script loads
displayUsers();