// Define an asynchronous function to fetch user data
async function fetchUserData() {
    // API endpoint URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK (status code 200–299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the response data as JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through the users and create <li> elements
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as the content
            userList.appendChild(listItem);  // Append the <li> to the <ul>
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors by displaying an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run the function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
