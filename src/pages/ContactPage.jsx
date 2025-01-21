import React from "react";

const ContactPage = () => {
	return (
		<main style={{ padding: "2rem", textAlign: "center" }}>
			<h1>Contact Us</h1>
			<form style={{ maxWidth: "600px", margin: "0 auto" }}>
				<div style={{ marginBottom: "1rem" }}>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						placeholder="Your Name"
						required
						style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
					/>
				</div>
				<div style={{ marginBottom: "1rem" }}>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						placeholder="Your Email"
						required
						style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
					/>
				</div>
				<div style={{ marginBottom: "1rem" }}>
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						rows="5"
						placeholder="Your Message"
						style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
					/>
				</div>
				<button
					type="submit"
					style={{
						display: "block",
						margin: "1rem auto",
						padding: "0.5rem 1rem",
						fontSize: "1rem",
						backgroundColor: "#007bff",
						color: "white",
						border: "none",
						cursor: "pointer",
						borderRadius: "5px",
						transition: "background-color 0.3s",
					}}
					onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
					onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
				>
					Submit
				</button>
			</form>
		</main>
	);
};

export default ContactPage;
