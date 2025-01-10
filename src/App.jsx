import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import PoliciesPage from "./pages/PoliciesPage";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/policies" element={<PoliciesPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
		</div>
	);
};

export default App;
