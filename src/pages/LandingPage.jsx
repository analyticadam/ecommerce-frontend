import React from "react";

const LandingPage = () => {
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
		</div>
	);
};

export default LandingPage;
