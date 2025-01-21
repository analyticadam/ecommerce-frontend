// Import necessary libraries
import React from "react";

// Define the LoginPage component
const LoginPage = () => {
	return (
		<main className="login-page">
			{/* Page title */}
			<h1 className="login-title">Login</h1>

			{/* Login form for user authentication */}
			<form className="login-form">
				{/* Username input field */}
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						placeholder="Enter your username"
						required
						className="form-control"
					/>
				</div>

				{/* Password input field */}
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						placeholder="Enter your password"
						required
						className="form-control"
					/>
				</div>

				{/* Submit button */}
				<button type="submit" className="login-button">
					Log In
				</button>
			</form>
		</main>
	);
};

// Export the LoginPage component
export default LoginPage;
