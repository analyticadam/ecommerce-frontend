import React, { useState, useEffect } from "react"; // Import React and necessary hooks for state management
import axios from "axios"; // Import Axios for making HTTP requests
import "../App.css"; // Import CSS for styling

const BASE_URL = "http://localhost:5000/api"; // Updated to match backend server URL

const ProductsPage = () => {
	// State for storing the search query entered by the user
	const [query, setQuery] = useState("");

	// State for storing the list of products fetched from the backend
	const [products, setProducts] = useState([]);

	// State for handling errors
	const [error, setError] = useState("");

	// State for adding new items
	const [newItem, setNewItem] = useState({
		title: "",
		price: "",
		currency: "USD",
		link: "",
	});

	// State for handling edit mode
	const [editItem, setEditItem] = useState(null);

	// Fetch existing items from the backend when the component mounts
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(`${BASE_URL}/items`); // Use full API URL
				console.log("API Response:", response.data); // Debug the API response
				setProducts(Array.isArray(response.data) ? response.data : []); // Ensure products is always an array
			} catch (err) {
				console.error("Failed to fetch products:", err.message);
				setError("Could not fetch items. Please try again.");
			}
		};
		fetchProducts();
	}, []);

	// Function to search for eBay products
	const searchEbayProducts = async () => {
		try {
			// Make an API call to the backend endpoint for eBay product search
			const response = await axios.get("/api/ebay/search", {
				params: { q: query },
			});
			setProducts(response.data || []); // Update the products state with the fetched data
		} catch (error) {
			console.error("Error fetching products:", error.message);
		}
	};

	// Function to add a new item
	const handleAddItem = async (e) => {
		e.preventDefault(); // Prevent form submission
		try {
			const response = await axios.post(`${BASE_URL}/items`, newItem); // Use full URL for API call
			setProducts([...products, response.data]); // Append the new item to the products state
			setNewItem({ title: "", price: "", currency: "USD", link: "" }); // Reset the form
		} catch (err) {
			console.error("Failed to add item:", err.message);
			setError("Failed to add item. Please try again.");
		}
	};

	// Function to update an existing item
	const handleUpdateItem = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(
				`${BASE_URL}/items/${editItem._id}`,
				editItem
			); // Use full URL for API call
			setProducts(
				products.map((item) =>
					item._id === editItem._id ? response.data : item
				)
			); // Update the state with the edited item
			setEditItem(null); // Exit edit mode
		} catch (err) {
			console.error("Failed to update item:", err.message);
			setError("Failed to update item. Please try again.");
		}
	};

	// Function to delete an item
	const handleDeleteItem = async (id) => {
		try {
			await axios.delete(`${BASE_URL}/items/${id}`); // Use full URL for API call
			setProducts(products.filter((item) => item._id !== id)); // Remove the deleted item from state
		} catch (err) {
			console.error("Failed to delete item:", err.message);
			setError("Failed to delete item. Please try again.");
		}
	};

	return (
		<div className="container">
			<h1>Manage Products</h1>
			{error && <p style={{ color: "red" }}>{error}</p>}

			{/* Search for eBay Products */}
			<div className="search-box">
				<input
					type="text"
					placeholder="Search for products"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button className="search-button" onClick={searchEbayProducts}>
					Search
				</button>
			</div>

			{/* Form to Add New Item */}
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

			{/* Display List of Products */}
			<div className="products">
				{products.map((item) => (
					<div className="product-card" key={item._id}>
						{editItem && editItem._id === item._id ? (
							// Edit Form for Updating Item
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
							// Display Product Details
							<>
								<h3>{item.title}</h3>
								<p>
									${item.price} {item.currency}
								</p>
								<a href={item.link} target="_blank" rel="noopener noreferrer">
									View Product
								</a>
								<button onClick={() => setEditItem(item)}>Edit</button>
								<button onClick={() => handleDeleteItem(item._id)}>
									Delete
								</button>
							</>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsPage;
