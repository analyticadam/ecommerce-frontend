import React from "react";

const PoliciesPage = () => {
	return (
		<main style={{ padding: "2rem", textAlign: "center" }}>
			<h1>Our Policies</h1>
			<br />
			{/* Container for policies with consistent spacing */}
			<div style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.8" }}>
				<h2>Shipping Policy</h2>
				{/* Description of shipping policies */}
				<p>All orders ship within 2-5 business days.</p>
				<h2>Return Policy</h2>
				{/* Details about return policies */}
				<p>Items can be returned within 30 days for a full refund.</p>
				<h2>Privacy Policy</h2>
				{/* Information about data privacy */}
				<p>
					We value your privacy and do not share your data with third parties.
				</p>
			</div>
		</main>
	);
};

export default PoliciesPage;
