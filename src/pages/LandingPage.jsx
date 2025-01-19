import React from "react";
import SignUpForm from "../components/Register.jsx";
import LoginForm from "../components/Login.jsx";

const LandingPage = (props) => {
	return (
		<div>
			<header
				style={{
					textAlign: "center",
					padding: "2rem",
					backgroundColor: "#f8f9fa",
				}}
			>
				<h1>Welcome to the Big Thrifting Reselling Store</h1>
				<p>
					Your one-stop shop for everything you need! Browse our products below.
				</p>
				<button style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}>
					Shop Now
				</button>
			</header>
			{/* <SignUpForm className="signLogForm" setUser={props.setUser} />
			<LoginForm className="signLogForm" setUser={props.setUser} /> */}
		</div>
	);
};

export default LandingPage;
