import React from "react";
import { useEffect } from "react";

// Component to display the user's shopping cart
const CartPage = ({ cart, fetchCart, removeItem, updateQuantity }) => {
	// Log cart items for debugging
	console.log("Cart items:", cart);
	useEffect(() => {
		fetchCart();
	}, []);

	const calculateTotal = () => {
		return cart
			.reduce((total, item) => total + item.productId.price * item.quantity, 0)
			.toFixed(2);
	};

	return (
		<main>
			<div className="cart">
				<h1>Your Shopping Cart</h1>
				{cart.length === 0 ? (
					<p>Your cart is empty.</p>
				) : (
					<ul>
						{cart.map((item) => (
							<li key={item.productId._id}>
								<span>{item.productId.title}</span> ${item.productId.price} x{" "}
								<input
									type="number"
									value={item.quantity}
									min="1"
									onChange={(e) =>
										updateQuantity(item._id, parseInt(e.target.value, 10))
									}
								/>
								<button
									onClick={() => removeItem(item._id)}
									aria-label={`Remove ${item.productId.title} from cart`}
								>
									Remove
								</button>
							</li>
						))}
					</ul>
				)}
				<div className="cart-total">Total: ${calculateTotal()}</div>
			</div>
		</main>
	);
};

export default CartPage;
