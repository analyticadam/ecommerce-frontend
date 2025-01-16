import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useLocation } from "react-router";
import { getUser } from "../utilities/users-services";
import { useCart } from "../contexts/CartContext"; // Import the useCart hook from CartContext

const BASE_URL = "http://localhost:5000/api";

const ProductsPage = () => {
	const location = useLocation();
	const { addItem } = useCart(); // Access the addItem function from the cart context
	const [query, setQuery] = useState("");
	const [user, setUser] = useState(null);
	const [products, setProducts] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		// Fetch user data on component mount
		async function fetchUser() {
			try {
				const userData = await getUser();
				setUser(userData);
			} catch (err) {
				console.error("Failed to fetch user:", err.message);
				setError("Failed to load user data.");
			}
		}
		fetchUser();
	}, []);

	useEffect(() => {
		// Fetch products from the backend on component mount
		const fetchProducts = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/items`);
				setProducts(response.data);
			} catch (err) {
				console.error("Failed to fetch products:", err.message);
				setError("Could not fetch items. Please try again.");
			}
		};
		fetchProducts();
	}, []);

	// Handle adding items to the cart
	const handleAddToCart = (product) => {
		addItem(product); // Use the addItem method from cart context to add a product
		console.log("Product added to cart:", product);
	};

	return (
		<div className="container">
			<h1>Manage Products, {user ? user.username : "Guest"}!</h1>
			{error && <p style={{ color: "red" }}>{error}</p>}
			<div className="search-box">
				<input
					type="text"
					placeholder="Search for products"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button onClick={searchEbayProducts}>Search</button>
			</div>
			<div className="products">
				{products.map((product) => (
					<div key={product.id} className="product">
						<h3>{product.name}</h3>
						<p>${product.price}</p>
						<button onClick={() => handleAddToCart(product)}>
							Add to Cart
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsPage;
