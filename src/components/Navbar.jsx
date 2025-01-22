import React from "react";
import { Router, Link } from "react-router";
import "../App.css"; // Import styles here
import { logOut } from "../utilities/users-services"; // Import the `logout` function

const Navbar = ({ user, setUser, deleteCart }) => {
	function handleLogOut() {
		deleteCart(); // Delete the cart before logging out
		logOut(); // Log the user out
		setUser(null); // Clear the user state
	}
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
				{user ? (
					<>
						<li>
							<Link to="/cart">Shopping Cart</Link>
						</li>
						<li>
							<Link to="/" onClick={handleLogOut}>
								Logout
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/login">Login</Link> {/* Link to Login page */}
						</li>
						<li>
							<Link to="/register">Register</Link> {/* Link to Register page */}
						</li>
					</>
				)}

				{/* ) */}
			</ul>
		</nav>
	);
};

export default Navbar;
