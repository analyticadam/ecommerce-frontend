import React from "react";
import { Router, Routes, Route } from "react-router"; // Ensure this matches your router imports
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import PoliciesPage from "./pages/PoliciesPage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "./contexts/CartContext"; // Import the Cart Context
// import { getUser } from "./utilities/users-services"; // Import the getUser function

const App = () => {
	// Check if the user is logged in
	// const [user, setUser] = useState(getUser());

	return (
		<div>
			<Header /> {/* Billboard displayed across all pages */}
			<div className="flexitems">
				<div>
					<Navbar />
				</div>
				<div className="body-content">
					<CartProvider>
						{" "}
						{/* Provides cart state to all components within the app */}
						<Routes>
							<Route path="/" element={<LandingPage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/products" element={<ProductsPage />} />
							<Route path="/cart" element={<CartPage />} />{" "}
							{/* Provides a route to view the cart */}
							<Route path="/policies" element={<PoliciesPage />} />
							<Route path="/contact" element={<ContactPage />} />
						</Routes>
					</CartProvider>
				</div>
			</div>
		</div>
	);
};

export default App;
