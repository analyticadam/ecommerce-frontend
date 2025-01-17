import React, { createContext, useReducer, useContext } from "react";

// Create a context for managing cart data across the application
const CartContext = createContext();

// Define the initial state for the cart
const initialCartState = { items: [] };

// Reducer function to handle actions related to the cart
function cartReducer(state, action) {
	switch (action.type) {
		case "ADD_ITEM":
			// Find the index of the existing item in the cart
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);
			if (existingItemIndex > -1) {
				// If the item exists, update its quantity
				const items = [...state.items];
				items[existingItemIndex].quantity += action.payload.quantity;
				console.log("Updated item quantity in cart:", items); // Log the updated cart state for debugging
				return { ...state, items };
			} else {
				// If the item does not exist, add it to the cart
				console.log("Added new item to cart:", action.payload); // Log the new item addition for debugging
				return { ...state, items: [...state.items, action.payload] };
			}
		case "REMOVE_ITEM":
			// Filter out the item to be removed from the cart
			const updatedItems = state.items.filter(
				(item) => item.id !== action.payload.id
			);
			console.log("Removed item from cart:", action.payload); // Log the item removal for debugging
			return { ...state, items: updatedItems };
		default:
			// Handle unexpected actions with a warning in the console
			console.warn("Unhandled action type in cart reducer:", action.type);
			return state;
	}
}

// Provider component to wrap parts of the app needing access to cart data
export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialCartState);

	// Function to add an item to the cart
	const addItem = (item) => {
		console.log("Dispatching add item:", item); // Log action dispatch for debugging
		dispatch({ type: "ADD_ITEM", payload: item });
	};

	// Function to remove an item from the cart
	const removeItem = (id) => {
		console.log("Dispatching remove item:", id); // Log action dispatch for debugging
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	return (
		<CartContext.Provider value={{ ...state, addItem, removeItem }}>
			{children} {/* Render children components with cart context */}
		</CartContext.Provider>
	);
};

// Custom hook to use cart context in functional components
export const useCart = () => useContext(CartContext);
