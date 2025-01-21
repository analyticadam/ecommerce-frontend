import React from "react";
import SignUpForm from "../components/Register.jsx";
import LoginForm from "../components/Login.jsx";

const LandingPage = (props) => {
	return (
		<main style={{ padding: "2rem", textAlign: "center" }}>
			<h1>Welcome to the Big Thrifting Reselling Store</h1>
			<br />
			<p>
				Welcome to the Big Thrifting Reselling Store! The one stop where you can
				find all of your favorite items from your childhood, items that were
				discontinued, and unique items that may not be available in your area.
				Check out some of the items below, you don't want to miss out on the
				deal of a life time...
			</p>
			<br />
			<button style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
				Shop Now
			</button>
		</main>
	);
};

export default LandingPage;
