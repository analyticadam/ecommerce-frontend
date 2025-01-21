// Import necessary libraries
import React from "react";

// Define the RegisterPage component
const RegisterPage = () => {
	return (
		<main
			style={{
				marginTop: "200px", // Ensures the form is positioned below the fixed header and navbar
				padding: "2rem", // Adds internal spacing around the form
				maxWidth: "500px", // Restricts the form's width for better readability
				textAlign: "center", // Centers the content within the form
				zIndex: "10", // Ensures the form appears above other elements
				position: "relative", // Keeps the form in its intended position
			}}
		>
			{/* Page title */}
			<h1>Register</h1>

			{/* Registration form for new users */}
			<form>
				{/* Name input field */}
				<div style={{ marginBottom: "1rem" }}>
					<label htmlFor="name">Display Name:</label>
					<input
						type="text"
						id="name"
						placeholder="Display Name"
						required
						style={{
							width: "100%", // Makes the input field span the full width of its container
							padding: "0.5rem", // Adds padding for better usability
							marginTop: "0.5rem", // Adds space above the input field
						}}
					/>
				</div>

				{/* Email input field */}
				<div style={{ marginBottom: "1rem" }}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						placeholder="Please enter your email"
						required
						style={{
							width: "100%", // Makes the input field span the full width of its container
							padding: "0.5rem", // Adds padding for better usability
							marginTop: "0.5rem", // Adds space above the input field
						}}
					/>
				</div>

				{/* Password input field */}
				<div style={{ marginBottom: "1rem" }}>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						placeholder="Password"
						required
						style={{
							width: "100%", // Makes the input field span the full width of its container
							padding: "0.5rem", // Adds padding for better usability
							marginTop: "0.5rem", // Adds space above the input field
						}}
					/>
				</div>

				{/* Confirm password input field */}
				<div style={{ marginBottom: "1rem" }}>
					<label htmlFor="confirmPassword">Confirm Password:</label>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Passwords must match"
						required
						style={{
							width: "100%", // Makes the input field span the full width of its container
							padding: "0.5rem", // Adds padding for better usability
							marginTop: "0.5rem", // Adds space above the input field
						}}
					/>
				</div>

				{/* Submit button */}
				<button
					type="submit"
					style={{
						padding: "0.5rem 1rem", // Sets the size of the button
						backgroundColor: "#007bff", // Sets the button's background color
						color: "white", // Sets the button text color
						border: "none", // Removes the default border
						borderRadius: "5px", // Adds rounded corners for a modern look
						cursor: "pointer", // Changes the cursor to a pointer when hovered
					}}
				>
					Sign Up
				</button>
			</form>
		</main>
	);
};

// Export the RegisterPage component
export default RegisterPage;
