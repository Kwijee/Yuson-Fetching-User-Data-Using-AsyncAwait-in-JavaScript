// script.js
// This program simulates fetching user data using async/await
// and displays Name, Email, and City on the webpage.

// Simulated API function
async function getUsers() {
    // Simulate network delay using Promise
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            try {

                // JSON Data (Provided)
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

                resolve(data);

            } catch (error) {
                reject("Failed to load user data");
            }
        }, 1000); // 1 second delay

    });
}


// Function to display users
async function displayUsers() {

    const container = document.getElementById("output");

    try {

        // Fetch users using async/await
        const users = await getUsers();

        // Loop through users
        users.forEach(user => {

            const div = document.createElement("div");
            div.classList.add("user");

            div.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            `;

            container.appendChild(div);
        });

    } catch (error) {

        // Error handling
        container.innerHTML = `<p class="error">${error}</p>`;
        console.error(error);

    }
}


// Call function
displayUsers();
