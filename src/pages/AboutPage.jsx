import React from "react";

const AboutPage = () => {
	return (
		<main style={{ padding: "2rem", textAlign: "center" }}>
			<h1>About Us</h1>
			{/* Brief description of the company */}
			<p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
				Our mission is to provide the best products at the best prices. Founded
				in 2025, we have served thousands of happy customers worldwide. We value
				quality, affordability, and customer satisfaction.
			</p>
		</main>
	);
};

export default AboutPage;
