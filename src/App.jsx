import { useState } from "react"; // Import React and useState hook
import { Router, Routes, Route } from "react-router"; // Import necessary components from react-router
import Navbar from "./components/Navbar"; // Import Navbar component
import Header from "./components/Header"; // Import Header component
import LandingPage from "./pages/LandingPage"; // Import LandingPage component
import AboutPage from "./pages/AboutPage"; // Import AboutPage component
import ProductsPage from "./pages/ProductsPage"; // Import ProductsPage component
import CartPage from "./pages/CartPage"; // Import CartPage component
import PoliciesPage from "./pages/PoliciesPage"; // Import PoliciesPage component
import ContactPage from "./pages/ContactPage"; // Import ContactPage component
import { CartProvider } from "./contexts/CartContext"; // Import the Cart Context provider
import { useCart } from "./utilities/cart-function.js"; // Import cart utility functions
import LoginForm from "./components/Login"; // Import LoginForm component
import SignUpForm from "./components/Register"; // Import SignUpForm component
import { getUser } from "./utilities/users-services"; // Import the getUser function

const App = () => {
	// Manage logged-in state using `getUser` function
	const [user, setUser] = useState(getUser());
	const { cart, fetchCart, addtoCart, removeItem, updateQuantity } = useCart(
		user?._id
	);

	return (
		<CartProvider>
			{" "}
			{/* Provides cart state to all components within the app */}
			<Header /> {/* Billboard displayed across all pages */}
			<div className="flexitems">
				<Navbar user={user} setUser={setUser} />{" "}
				{/* Navbar with user and setUser props */}
				<div className="body-content">
					<Routes>
						<Route path="/" element={<LandingPage />} />{" "}
						{/* Route for LandingPage */}
						<Route path="/about" element={<AboutPage />} />{" "}
						{/* Route for AboutPage */}
						<Route
							path="/products"
							element={<ProductsPage addtoCart={addtoCart} user={user} />}
						/>{" "}
						{/* Pass the addItem function to the ProductsPage */}
						<Route
							path="/cart"
							element={
								<CartPage
									cart={cart}
									removeItem={removeItem}
									updateQuantity={updateQuantity}
									fetchCart={fetchCart}
								/>
							}
						/>
						{/* Provides a route to view the cart */}
						<Route path="/policies" element={<PoliciesPage />} />{" "}
						{/* Route for PoliciesPage */}
						<Route path="/contact" element={<ContactPage />} />{" "}
						{/* Route for ContactPage */}
						<Route
							path="/login"
							element={<LoginForm setUser={setUser} />}
						/>{" "}
						{/* Login page */}
						<Route path="/register" element={<SignUpForm />} />{" "}
						{/* Registration page */}
					</Routes>
				</div>
			</div>
		</CartProvider>
	);
};

export default App;
