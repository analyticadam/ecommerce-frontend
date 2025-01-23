import React, { useState } from "react";
import axios from "axios";

const CreateProducts = () => {
	const [product, setProduct] = useState({
		title: "",
		price: "",
		currency: "USD",
		image: "", // Added default value for 'image'
	});
	const [status, setStatus] = useState({ type: "", message: "" });

	const handleChange = (e) => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};
	const handleSubmit = async (e) => {
		console.log(product);

		e.preventDefault();
		// ... your existing formData.append calls ...

		try {
			const formDataToSend = new FormData();
			formDataToSend.append("title", product.title);
			formDataToSend.append("price", product.price);
			formDataToSend.append("currency", product.currency);
			formDataToSend.append("image", product.image);
			// formDataToSend.append("category", formData.category);
			console.log("I am a legend", formDataToSend);
			const response = await axios.post(
				"http://localhost:5000/api/products/",
				formDataToSend,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
					validateStatus: (status) => status < 500, // Add this line
				}
			);
			// ... rest of your success handling
		} catch (error) {
			console.error(error.response.data);
			console.error("Upload error:", error);
			setStatus({
				type: "error",
				message:
					error.response?.data?.message || error.message || "Upload failed",
			});
		}
	};

	return (
		<main style={{ padding: "2rem" }}>
			<div style={{ maxWidth: "600px", margin: "0 auto" }}>
				<h1>Add New Product</h1>

				{status.message && (
					<div
						style={{
							padding: "1rem",
							marginBottom: "1rem",
							backgroundColor: status.type === "error" ? "#fee2e2" : "#dcfce7",
							borderRadius: "4px",
						}}
					>
						{status.message}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<div style={{ marginBottom: "1rem" }}>
						<label
							htmlFor="title"
							style={{ display: "block", marginBottom: "0.5rem" }}
						>
							Product Title
						</label>
						<input
							type="text"
							id="title"
							name="title"
							value={product.title}
							onChange={handleChange}
							required
							style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
						/>
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<label
							htmlFor="price"
							style={{ display: "block", marginBottom: "0.5rem" }}
						>
							Price
						</label>
						<input
							type="number"
							id="price"
							name="price"
							value={product.price}
							onChange={handleChange}
							required
							min="0"
							step="0.01"
							style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
						/>
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<label
							htmlFor="currency"
							style={{ display: "block", marginBottom: "0.5rem" }}
						>
							Currency
						</label>
						<input
							type="text"
							id="currency"
							name="currency"
							value={product.currency}
							onChange={handleChange}
							required
							style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
						/>
					</div>

					<div style={{ marginBottom: "1rem" }}>
						<label
							htmlFor="image"
							style={{ display: "block", marginBottom: "0.5rem" }}
						>
							Image
						</label>
						<input
							type="[string]"
							id="image"
							name="image"
							value={product.image}
							onChange={handleChange}
							style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
						/>
					</div>

					<button
						type="submit"
						style={{
							width: "100%",
							padding: "0.5rem",
							backgroundColor: "#2563eb",
							color: "white",
							border: "none",
							borderRadius: "4px",
							cursor: "pointer",
						}}
					>
						Add Product
					</button>
				</form>
			</div>
		</main>
	);
};

export default CreateProducts;
