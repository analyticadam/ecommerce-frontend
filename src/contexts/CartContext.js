import React, { createContext, useReducer, useContext } from "react";

// Context creation for cart data
const CartContext = createContext();

// Reducer function to handle actions related to the cart
function cartReducer(state, action) {
	switch (action.type) {
		case "ADD_ITEM":
			// Adds an item to the cart or updates its quantity if already present
			const existingItemIndex = state.items.findIndex(
				(item) => item.id === action.payload.id
			);
			if (existingItemIndex > -1) {
				const items = [...state.items];
				items[existingItemIndex].quantity += action.payload.quantity;
				return { ...state, items };
			} else {
				return { ...state, items: [...state.items, action.payload] };
			}
		case "REMOVE_ITEM":
			// Removes an item from the cart
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload.id),
			};
		default:
			return state;
	}
}

// Provider component that wraps parts of the app needing access to cart data
export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, { items: [] });

	// Functions to manipulate the cart, exposed to consumers
	const addItem = (item) => dispatch({ type: "ADD_ITEM", payload: item });
	const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: id });

	return (
		<CartContext.Provider value={{ ...state, addItem, removeItem }}>
			{children}
		</CartContext.Provider>
	);
};

// Custom hook to use cart context
export const useCart = () => useContext(CartContext);
