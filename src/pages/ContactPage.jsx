import React from "react";

const ContactPage = () => {
	return (
		<div style={{ padding: "2rem" }}>
			<h1>Contact Us</h1>
			<form>
				<div>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" placeholder="Your Name" required />
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" placeholder="Your Email" required />
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<textarea id="message" rows="5" placeholder="Your Message"></textarea>
				</div>
				<button
					type="submit"
					style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactPage;
