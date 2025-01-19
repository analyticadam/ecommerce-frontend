// Import necessary libraries
import React from "react";

// Import the Login component
import LoginForm from "../components/Login.jsx";

// Define the LoginPage component
const LoginPage = (props) => {
	return (
		<div>
			<LoginForm className="signLogForm" setUser={props.setUser} />
		</div>
	);
};

// Export the LoginPage component as default
export default LoginPage;
