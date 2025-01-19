import React from "react";
import { Router, Link } from "react-router";
import "../App.css"; // Import styles here

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navbar-list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About Us</Link>
				</li>
				<li>
					<Link to="/products">Products</Link>
				</li>
				<li>
					<Link to="/policies">Policies</Link>
				</li>
				<li>
					<Link to="/contact">Contact Us</Link>
				</li>

				{/* Login and Register links */}
				<li>
					<Link to="/login">Login</Link> {/* Link to Login page */}
				</li>
				<li>
					<Link to="/register">Register</Link> {/* Link to Register page */}
				</li>
				{/* ) */}
			</ul>
		</nav>
	);
};

export default Navbar;
