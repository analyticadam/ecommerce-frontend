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

export function getUser() {
	const token = getToken();
	// If there is a token, returns the user in the payload, otherwise it returns null
	// The expression splits the token, parses the second part of it, and accesses the user key in the object
	return token ? JSON.parse(atob(token.split(".")[1])).user : null;
	// Returns the name and email from the payload
}

export function logOut() {
	localStorage.removeItem("token");
}

export default { login };
