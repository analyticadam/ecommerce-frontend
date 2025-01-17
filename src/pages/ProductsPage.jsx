import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { useLocation } from "react-router";
import { getUser } from "../utilities/users-services";
import { useCart } from "../contexts/CartContext"; // Import the useCart hook from CartContext
import { use } from "react";

const BASE_URL = "http://localhost:5000/api"; // Base URL for API requests

const ProductsPage = () => {
	const { addItem } = useCart(); // Access the addItem function from cart context
	const [products, setProducts] = useState([]); // State for product data
	const [error, setError] = useState(""); // State for error messages
	const [user, setUser] = useState(null); // State for the logged-in user
	const [editItem, setEditItem] = useState(null); // State for editing items
	const [newItem, setNewItem] = useState({
		title: "",
		price: "",
		currency: "USD",
		link: "",
	}); // State for new item addition

	useEffect(() => {
		console.log(user);
	}, [user]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/items`);
				console.log("Fetched products:", response.data); // Debugging log
				setProducts(response.data); // Set the fetched products in state
			} catch (err) {
				console.error("Failed to fetch products:", err.message);
				setError("Could not fetch items. Please try again.");
			}
		};
		fetchProducts();
	}, []); // Keep a single useEffect for fetching products

	// Handle adding a new item
	const handleAddItem = async (e) => {
		e.preventDefault(); // Prevent form submission
		try {
			const response = await axios.post(`${BASE_URL}/items`, newItem); // Add the new item to the backend
			setProducts([...products, response.data]); // Update state with the new item
			setNewItem({ title: "", price: "", currency: "USD", link: "" }); // Reset the form
		} catch (err) {
			console.error("Failed to add item:", err.message);
			setError("Failed to add item. Please try again.");
		}
	};

	// Handle editing an existing item
	const handleUpdateItem = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(
				`${BASE_URL}/items/${editItem._id}`,
				editItem
			); // Update the item in the backend
			setProducts(
				products.map((item) =>
					item._id === editItem._id ? response.data : item
				)
			); // Update state with the edited item
			setEditItem(null); // Exit edit mode
		} catch (err) {
			console.error("Failed to update item:", err.message);
			setError("Failed to update item. Please try again.");
		}
	};

	// Handle deleting an item
	const handleDeleteItem = async (id) => {
		try {
			await axios.delete(`${BASE_URL}/items/${id}`); // Delete the item from the backend
			setProducts(products.filter((item) => item._id !== id)); // Update state to remove the deleted item
		} catch (err) {
			console.error("Failed to delete item:", err.message);
			setError("Failed to delete item. Please try again.");
		}
	};

	// Handle adding a product to the cart
	const handleAddToCart = (product) => {
		addItem(product); // Add the product to the cart
		console.log("Product added to cart:", product); // Log the added product
	};

	return (
		<div className="container">
			{/* Conditionally render the header only if the user is available */}
			{user && user.username && <h1>Manage Products, {user.username}!</h1>}
			{error && <p style={{ color: "red" }}>{error}</p>}{" "}
			{/* Display error messages */}
			{/* Form for adding a new item */}
			<form onSubmit={handleAddItem}>
				<h2>Add New Item</h2>
				<input
					type="text"
					placeholder="Title"
					value={newItem.title}
					onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
					required
				/>
				<input
					type="number"
					placeholder="Price"
					value={newItem.price}
					onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
					required
				/>
				<input
					type="text"
					placeholder="Currency"
					value={newItem.currency}
					onChange={(e) => setNewItem({ ...newItem, currency: e.target.value })}
					required
				/>
				<input
					type="text"
					placeholder="Link"
					value={newItem.link}
					onChange={(e) => setNewItem({ ...newItem, link: e.target.value })}
					required
				/>
				<button type="submit">Add Item</button>
			</form>
			{/* List of products */}
			<div className="products">
				{products.length > 0 ? (
					products.map((product) => (
						<div key={product._id} className="product">
							{editItem && editItem._id === product._id ? (
								// Edit form for an item
								<form onSubmit={handleUpdateItem}>
									<input
										type="text"
										value={editItem.title}
										onChange={(e) =>
											setEditItem({ ...editItem, title: e.target.value })
										}
										required
									/>
									<input
										type="number"
										value={editItem.price}
										onChange={(e) =>
											setEditItem({ ...editItem, price: e.target.value })
										}
										required
									/>
									<input
										type="text"
										value={editItem.currency}
										onChange={(e) =>
											setEditItem({ ...editItem, currency: e.target.value })
										}
										required
									/>
									<input
										type="text"
										value={editItem.link}
										onChange={(e) =>
											setEditItem({ ...editItem, link: e.target.value })
										}
										required
									/>
									<button type="submit">Update</button>
									<button onClick={() => setEditItem(null)}>Cancel</button>
								</form>
							) : (
								<>
									<h3>{product.title}</h3>
									<p>${product.price.toFixed(2)}</p>
									<a
										href={product.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										View Product
									</a>
									<button onClick={() => handleAddToCart(product)}>
										Add to Cart
									</button>
									<button onClick={() => setEditItem(product)}>Edit</button>
									<button onClick={() => handleDeleteItem(product._id)}>
										Delete
									</button>
								</>
							)}
						</div>
					))
				) : (
					<p>No products available.</p>
				)}
			</div>
		</div>
	);
};

export default ProductsPage;
