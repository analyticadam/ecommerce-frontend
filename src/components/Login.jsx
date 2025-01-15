import { useState } from "react";
import userServices from "../utilities/users-services";
import { useNavigate } from "react-router"; // allows for navigation without clicking

function LoginForm() {
	const [user, setUser] = useState("");
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState("");
	const navigate = useNavigate();

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		setError("");
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const credentials = { ...formData };
		console.log(credentials);
		try {
			// the promise returned by the login service method will resolve to the user
			// object includes in the payload of the JWT
			const user = await userServices.login(credentials);
			console.log(user);
			setUser(user.name);
			navigate("/profile/", { state: { user } }); // first arg is location to navigate to, second arg is the location it stores the locations your are navigating to and from.
		} catch (err) {
			console.log("Error caught", err);
			const errorMessage =
				err.response?.data?.message || "Log in Failed - Try Again";
			setError(errorMessage);
		}
	}
	return (
		<>
			<div className="signLogForm">
				<p>Log In to add and edit your own audio and images for words</p>
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Email address</label>
					<br />
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="email address will be your login"
						required
					/>
					<br />
					<label>Password</label>
					<br />
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleChange}
						placeholder="password"
						required
					/>
					<br />
					<button type="submit">LOG IN</button>
				</form>
				<p>{error}</p>
			</div>
		</>
	);
}

export default LoginForm;
