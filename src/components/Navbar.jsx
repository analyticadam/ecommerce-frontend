import React from "react";
import { Router, Link } from "react-router";

const Navbar = () => {
	return (
		<nav
			style={{ padding: "1rem", backgroundColor: "#343a40", color: "white" }}
		>
			<ul
				style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0 }}
			>
				<li>
					<Link to="/" style={{ color: "white", textDecoration: "none" }}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/about" style={{ color: "white", textDecoration: "none" }}>
						About Us
					</Link>
				</li>
				<li>
					<Link
						to="/products"
						style={{ color: "white", textDecoration: "none" }}
					>
						Products
					</Link>
				</li>
				<li>
					<Link
						to="/policies"
						style={{ color: "white", textDecoration: "none" }}
					>
						Policies
					</Link>
				</li>
				<li>
					<Link
						to="/contact"
						style={{ color: "white", textDecoration: "none" }}
					>
						Contact Us
					</Link>
				</li>
				<li>
					<button
						style={{
							backgroundColor: "#007bff",
							color: "white",
							padding: "0.5rem 1rem",
						}}
					>
						Login/Register
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
