import React from "react";
import { useEffect } from "react";

// Component to display the user's shopping cart
const CartPage = ({ cart, fetchCart, removeItem, updateQuantity }) => {
	// Log cart items for debugging
	console.log("Cart items:", cart);
	useEffect(() => {
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
							{/* Display product title and price */}
							<span>{item.productId.title || "No title"}</span> - $
							{item.productId.price || "0"} x{" "}
							<input
								type="number"
								value={item.quantity}
								min="1"
								onChange={(e) =>
									updateQuantity(item._id, parseInt(e.target.value, 10))
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
