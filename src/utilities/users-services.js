import * as usersAPI from "./users-api";

// Adding a new user to database
export async function signUp(userData) {
	// Utilizes the users-api.js API module to return a JSON Web Token (JWT)
	const token = await usersAPI.signUp(userData);
	console.log(token); // Using a console.log to verify the token exists and returning the username and password

	// This allows the token to be saved in localStorage and return the user
	localStorage.setItem("token", token);
	return getUser();
}

export async function login(credentials) {
	const token = await usersAPI.login(credentials);

	// Performs same operation as above for the token and user
	localStorage.setItem("token", token);
	return getUser();
}

export function getToken() {
	// This function returns null if there is no string in the key "token" or if the key doesn't exist
	const token = localStorage.getItem("token");
	if (!token) return null;
	// Obtains the payload
	const payload = JSON.parse(atob(token.split(".")[1]));

	// a JWT's experation is expressed in milliseconds, not seconds so convert
	if (payload.exp < Date.now() / 1000) {
		// Token has expired and we remove it from local storage
		localStorage.removeItem("token");
		return null; // Returns null to indicate that the user is no longer authenticated
	}
	return token;
}

// Function to retrieve the user information from the stored token
export function getUser() {
	// Get the token from localStorage or another source (e.g., cookie)
	const token = getToken();
	// If no token is found, return null to indicate the user is not authenticated
	if (!token) return null;
	try {
		// Decode and parse the token (split by '.' to access the payload part, then decode and parse JSON)
		const payload = JSON.parse(atob(token.split(".")[1]));
		// Return the `user` object from the payload if it exists, otherwise return null
		return payload.user || null;
	} catch (error) {
		// If there’s an error parsing the token (e.g., invalid format), log the error and return null
		console.error("Error parsing token:", error);
		return null;
	}
}

export function logOut() {
	localStorage.removeItem("token");
}

export default { login, signUp };
