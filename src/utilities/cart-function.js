import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // Base URL for API requests

// Custom hook for cart management
export const useCart = (userId) => {
	const [cart, setCart] = useState([]); // State for cart data

	// Fetch cart data from the backend
	const fetchCart = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/cart/${userId}`);
			setCart(response.data.items || []); // Update state with cart items
		} catch (err) {
			console.error("Error fetching cart:", err.response?.data || err.message);
		}
	};

	// Fetch cart on component mount or when userId changes
	useEffect(() => {
		if (userId) {
			fetchCart();
		}
	}, [cart]);

	// Function to add items to the cart
	const addtoCart = async (item) => {
		try {
			const existingItem = cart.find((entry) => entry.itemId === item._id);
			if (existingItem) {
				alert(`${item.title} is already in the cart!`);
				return;
			}

			// Update cart state
			const updatedCart = [
				...cart,
				{ itemId: item._id, quantity: 1, title: item.title, price: item.price },
			];
			setCart(updatedCart);

			// Send the addition request to the backend
			await axios.post(`${BASE_URL}/cart/${userId}`, {
				productId: item._id,
				quantity: 1,
			});
			alert(`${item.title} added to cart!`);
		} catch (err) {
			console.error(
				"Error adding item to cart:",
				err.response?.data || err.message
			);
			alert("Failed to add item to cart. Please try again.");
		}
	};

	// Function to remove items from the cart
	const removeItem = async (itemId) => {
		console.log("Removing item with ID:", itemId);
		try {
			await axios.delete(`${BASE_URL}/cart/${userId}/${itemId}`);
			// Update cart state locally
			setCart((prevCart) =>
				prevCart.filter((entry) => entry.itemId !== itemId)
			);
		} catch (err) {
			console.error(
				"Error removing item from cart:",
				err.response?.data || err.message
			);
			alert("Failed to remove item from cart. Please try again.");
		}
	};

	// Function to update the quantity of an item in the cart
	const updateQuantity = async (itemId, newQuantity) => {
		if (newQuantity < 1) {
			alert("Quantity must be at least 1.");
			return;
		}

		try {
			await axios.put(`${BASE_URL}/cart/${userId}/${itemId}`, {
				quantity: newQuantity,
			});

			// Update cart state locally
			setCart((prevCart) =>
				prevCart.map((entry) =>
					entry.itemId === itemId ? { ...entry, quantity: newQuantity } : entry
				)
			);
		} catch (err) {
			console.error(
				"Error updating item quantity:",
				err.response?.data || err.message
			);
			alert("Failed to update item quantity. Please try again.");
		}
	};

	return {
		cart,
		fetchCart,
		addtoCart,
		removeItem,
		updateQuantity,
	};
};
