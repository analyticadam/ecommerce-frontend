import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useLocation } from "react-router";
import { getUser } from "../utilities/users-services";
import { useCart } from "../contexts/CartContext"; // Import the useCart hook from CartContext
import { use } from "react";

const BASE_URL = "http://localhost:5000/api"; // Base URL for API requests

const ProductsPage = ({ user, addtoCart }) => {
	const [products, setProducts] = useState([]); // State for product data
	const [error, setError] = useState(""); // State for error messages
	const [editItem, setEditItem] = useState(null); // State for editing items
	const [newItem, setNewItem] = useState({
		title: "",
		price: "",
		currency: "USD",
		link: "",
	}); // State for new item addition
	// const [newItem, setNewItem] = useState({
	// 	title: "",
	// 	price: ""
	// }); // State for new item addition
	const [quantities, setQuantities] = useState({});
	useEffect(() => {
		console.log(user);
	}, [user]);

	// Fetch product data from the backend
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get("http://localhost:5000/api/products");
				setProducts(response.data);
			} catch (err) {
				console.error("Failed to fetch products:", err.message);
			}
		};
		fetchProducts();
	}, []);

	return (
		<main>
			<div className="products-header">
				<h1>Available Products</h1>
			</div>
			<div className="products">
				{products.map((product) => (
					<div key={product._id} className="product">
						<h3>{product.title}</h3>
						<p>${product.price.toFixed(2)}</p>
						<button onClick={() => addtoCart(product)}>Add to Cart</button>
					</div>
				))}
			</div>
		</main>
	);
};

export default ProductsPage;
