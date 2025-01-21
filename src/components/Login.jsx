import { useState } from "react";
import userServices from "../utilities/users-services";
import { useNavigate } from "react-router"; // Allows for navigation without clicking

function LoginForm({ setUser }) {
	const [formData, setFormData] = useState({
		username: "", // Changed "email" to "username" to match backend expectations
		password: "",
	});

	const [error, setError] = useState("");
	const navigate = useNavigate();

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setError(""); // Clear the error on input change
	}

	async function handleSubmit(e) {
		e.preventDefault(); // Prevent default form submission behavior

		// Construct the credentials payload
		const credentials = { ...formData };
		console.log("Payload being sent to backend:", credentials); // Log the payload

		try {
			// Send credentials to the backend
			const user = await userServices.login(credentials);
			console.log("User received from backend:", user); // Log the response
			setUser(user); // Update user state
			console.log("User state updated:", user.username); // Log the updated state
			navigate("/"); // Navigate to Products page
		} catch (err) {
			console.log("Error caught:", err); // Log the error
			const errorMessage =
				err.response?.data?.message || "Log in Failed - Try Again";
			setError(errorMessage); // Display error to the user
		}
	}

	return (
		<>
			<div className="signLogForm">
				<br />
				<p>Log In for User Access</p>
				<br />
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Username:</label>
					<input
						type="text"
						name="username" // Changed "email" to "username"
						value={formData.username}
						onChange={handleChange} // Update state on input change
						placeholder="Please enter your username for login"
						required
					/>
					<label>Password:</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange} // Update state on input change
						placeholder="Please Enter Password Here"
						required
					/>
					<button type="submit">Log In Admin</button>
				</form>
				<p>{error}</p>
			</div>
		</>
	);
}

export default LoginForm;
