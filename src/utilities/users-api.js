// TODO: we are using fetch here and can update to axios later
// ** set up the base url for the route
const LOCAL_URL = "http://localhost:5000";
const API_URL = "/api/users";
const URL = LOCAL_URL + API_URL;

export async function signUp(userData) {
	// Using fetch to make a POST request to the backend signup route
	// The base URL is combined with "/"
	const res = await fetch(URL, {
		method: "POST", // HTTP method for creating new resources
		headers: { "Content-Type": "application/json" }, // Specify JSON data format
		// Payload must be stringified before sending
		body: JSON.stringify(userData),
	});

	// Check if the request was successful
	if (res.ok) {
		// The response will resolve to the JWT (JSON Web Token)
		return res.json();
	} else {
		// Throw an error if the signup was invalid
		throw new Error("Invalid Sign Up");
	}
}

export async function login(credentials) {
	// Using fetch to make a POST request to the backend login route
	// Appending "/login" to the base URL
	const res = await fetch(URL + "/login", {
		method: "POST", // HTTP method for authenticating existing users
		headers: { "Content-Type": "application/json" }, // Specify JSON data format
		body: JSON.stringify(credentials), // Payload must be stringified
	});

	// Check if the request was successful
	if (res.ok) {
		// This will resolve to the JWT
		return res.json();
	} else {
		// Throw an error if login was invalid
		throw new Error("Invalid Log In");
	}
}
