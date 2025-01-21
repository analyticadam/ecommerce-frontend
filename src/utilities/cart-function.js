import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api"; // Base URL for API requests

// Custom hook for cart management
export const useCart = (userId) => {
	const [cart, setCart] = useState([]); // State for cart data

	// Function to fetch cart data from the backend
	const fetchCart = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/cart/${userId}`);
			console.log("Fetched cart items:", response.data.items); // Log the fetched items for debugging

			// Map the backend response to ensure all required fields are present
			setCart(response.data?.items || []);
		} catch (err) {
			console.error("Error fetching cart:", err.response?.data || err.message);
		}
	};

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
			fetchCart(); // Fetch the updated cart data to reflect the changes

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
			fetchCart(); // Fetch the updated cart data to reflect the changes
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
		// Validate the quantity input
		if (newQuantity < 1) {
			alert("Quantity must be at least 1."); // Notify the user about invalid input
			return; // Exit the function early if the quantity is invalid
		}

		// Ensure the itemId is valid
		if (!itemId) {
			console.error("Invalid itemId:", itemId); // Log an error if itemId is undefined
			alert("Failed to update quantity: Invalid item."); // Notify the user about the issue
			return; // Exit the function early if itemId is invalid
		}

		try {
			// Log the details of the update operation for debugging
			console.log("Updating item quantity:", { userId, itemId, newQuantity });

			// Prepare the payload to send to the backend
			const payload = { quantity: newQuantity };
			console.log("Payload sent:", payload); // Log the payload for verification

			// Send the update request to the backend API
			await axios.put(`${BASE_URL}/cart/${userId}/${itemId}`, payload);

			// Update the cart state locally to reflect the changes
			setCart((prevCart) =>
				prevCart.map((entry) =>
					entry.itemId === itemId ? { ...entry, quantity: newQuantity } : entry
				)
			);
			fetchCart(); // Fetch the updated cart data to reflect the changes
			// Log success message for debugging
			console.log("Item quantity updated successfully!");
		} catch (err) {
			// Log the error details for debugging
			console.error("Error updating item quantity:", {
				message: err.message,
				response: err.response?.data,
			});

			// Notify the user about the failure and provide a user-friendly message
			alert(
				err.response?.data?.message ||
					"Failed to update item quantity. Please try again."
			);
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
