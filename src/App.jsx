import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import PoliciesPage from "./pages/PoliciesPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
	return (
		<div>
			<Header /> {/* Billboard displayed across all pages */}
			<Navbar />
			<main>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/policies" element={<PoliciesPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
