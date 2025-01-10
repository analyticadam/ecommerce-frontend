import React from "react";

const ProductsPage = () => {
	const products = [
		{ id: 1, name: "Product 1", price: "$20", description: "A great product." },
		{
			id: 2,
			name: "Product 2",
			price: "$35",
			description: "Another great product.",
		},
	];

	return (
		<div style={{ padding: "2rem" }}>
			<h1>Our Products</h1>
			<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
				{products.map((product) => (
					<div
						key={product.id}
						style={{
							border: "1px solid #ccc",
							padding: "1rem",
							width: "200px",
						}}
					>
						<h3>{product.name}</h3>
						<p>{product.description}</p>
						<p>{product.price}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsPage;
