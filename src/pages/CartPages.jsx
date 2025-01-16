import React from "react";
import { useCart } from "../contexts/CartContext"; // Adjust path as necessary

const CartPage = () => {
	const { cartItems } = useCart(); // Assuming cartItems is part of what CartContext provides

	return (
		<div>
			<h1>Your Cart</h1>
			<ul>
				{cartItems.map((item) => (
					<li key={item.id}>
						{item.name} - ${item.price} x {item.quantity}
					</li>
				))}
			</ul>
		</div>
	);
};

export default CartPage;
