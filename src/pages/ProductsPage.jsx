import React, { useState } from "react";
import "../App.css";

const ProductsPage = () => {
	const [query, setQuery] = useState("");
	const [products, setProducts] = useState([]);

	const searchEbayProducts = async () => {
		try {
			const response = await axios.get("/api/ebay/search", {
				params: { q: query },
			});
			setProducts(response.data || []);
		} catch (error) {
			console.error("Error fetching products:", error.message);
		}
	};

	return (
		<div className="container">
			<h1>Search eBay Products</h1>
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
			<div className="products">
				{products.map((product) => (
					<div className="product-card" key={product.itemId}>
						<h3>{product.title}</h3>
						<p>
							{product.price?.value} {product.price?.currency}
						</p>
						<a
							href={product.itemWebUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							View on eBay
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsPage;
