import React, { useEffect } from "react";
// import { useCart } from "../contexts/CartContext"; // Adjust path as necessary
import { useCart } from "../utilities/cart-function"; // Import the useCart hook from cart-function.js

// Component to display the user's shopping cart
const CartPage = ({ cart, removeItem, updateQuantity, fetchCart }) => {
	// Function to handle updating an item's quantity
	const handleUpdateItem = (itemId, quantity) => {
		if (quantity > 0) {
			updateQuantity(itemId, quantity);
		}
	};
	useEffect(() => {
		console.log(cart);
		fetchCart();
	}, []);

	return (
		<div>
			<h1>Your Shopping Cart</h1>
			{cart.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<ul>
					{cart.map((item) => (
						<li key={item.productId._id}>
							<span>{item.productId.title}</span> - ${item.productId.price} x{" "}
							<input
								type="number"
								value={item.productId.quantity}
								min="1"
								onChange={(e) =>
									handleUpdateItem(item.itemId, parseInt(e.target.value, 10))
								}
							/>
							<button onClick={() => removeItem(item._id)}>Remove</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default CartPage;
