import { useState } from "react";
// Adding in auth, I am importing SignUp from utilities
import { signUp } from "../utilities/users-services";

function SignUpForm(props) {
	const [formData, setFormData] = useState({
		username: "", // Changed "name" to "username"
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setError("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent default form submission behavior
		console.log(formData); // Optional: Log the form data before processing

		try {
			// Set this up to be able to add a new user
			const submitData = { ...formData };
			delete submitData.confirmPassword; // Remove the confirmPassword field
			console.log(submitData); // Log the payload being sent to the backend

			// Send the data to the backend
			const user = await signUp(submitData);
			console.log(user); // Optional: Log the user data received from the backend

			// Use the setUser prop to update the user state in the parent component
			props.setUser(user);
		} catch (err) {
			// Handle errors
			setError("Sign up failed - please try again");
		}
	};

	return (
		<>
			<div className="signLogForm">
				<p>Please register for an Account below</p>
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Display Name:</label>
					<input
						type="text"
						name="username" // Changed "name" to "username"
						value={formData.username}
						onChange={handleChange}
						placeholder="Display Name"
						required
					/>
					<label>
						Please enter your e-mail address here: (must be a valid email)
					</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Please enter your email address"
						required
					/>
					<label>Password:</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="Password"
						required
					/>
					<label>Confirm Password:</label>
					<input
						type="password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleChange}
						placeholder="Passwords must match"
						required
					/>
					<button
						type="submit"
						disabled={formData.password !== formData.confirmPassword}
					>
						Sign Up
					</button>
				</form>
				<p>{error}</p>
			</div>
		</>
	);
}

export default SignUpForm;
