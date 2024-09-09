/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // Importing Framer Motion
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import api from "../assets/api";
import logo from "../assets/img/logo.jpg";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState(""); // State for success message
	const navigate = useNavigate();
	const location = useLocation();

	const currentYear = new Date().getFullYear();

	// Check if there is a success message from registration
	useEffect(() => {
		if (location.state && location.state.successMessage) {
			setSuccessMessage(location.state.successMessage); // Set the success message
		}
	}, [location]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccessMessage(""); // Clear success message on login attempt

		try {
			const res = await api.post("/api/token/", { username: email, password });

			if (res.status === 200) {
				localStorage.setItem("ACCESS_TOKEN", res.data.access);
				localStorage.setItem("REFRESH_TOKEN", res.data.refresh);

				const userRes = await api.get("/api/user/", {
					headers: {
						Authorization: `Bearer ${res.data.access}`,
					},
				});

				localStorage.setItem("userData", JSON.stringify(userRes.data));
				navigate("/user-dashboard");
			} else {
				setError("Login failed.");
			}
		} catch (error) {
			setError("Invalid Email or Password");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="relative mx-auto w-full bg-white h-full px-6 pb-8 sm:rounded-xl sm:px-10">
			<div className="flex flex-row pt-8 items-center">
				<img
					src={logo}
					alt=""
					className="w-14"
				/>
				<p className="ml-4">FROM QUERIES TO SOLUTION</p>
			</div>
			<div className="w-full pt-4">
				<div className="">
					<div className="font-sans text-gray-900 antialiased">
						<div className="min-h-screen flex flex-col sm:justify-center items-center sm:pt-0">
							<div className="w-full sm:max-w-md px-6 py-4 bg-white">
								<form
									method="POST"
									onSubmit={handleSubmit}>
									<div className="py-8">
										<center>
											<span className="text-5xl font-semibold text-green-600">Sign in</span>
											<Link
												to="/"
												className="text-red-600 font-semibold flex items-center justify-center pt-3">
												<ArrowBackIcon fontSize="small" />
												Back
											</Link>
										</center>
									</div>

									{/* Success Message */}
									{successMessage && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5 }}
											className="text-green-600 text-sm mt-4">
											{successMessage}
										</motion.div>
									)}

									<div>
										<label
											className="block font-medium text-sm text-gray-700"
											htmlFor="email">
											Email
										</label>
										<input
											type="email"
											name="email"
											placeholder="Email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											className="w-full rounded-md py-2.5 px-4 border-2 text-sm border-green-600"
											required
										/>
									</div>

									<div className="mt-4">
										<label
											className="block font-medium text-sm text-gray-700"
											htmlFor="password">
											Password
										</label>
										<div className="relative">
											<input
												id="password"
												type="password"
												name="password"
												placeholder="Password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												className="w-full rounded-md py-2.5 px-4 border-2 text-sm border-green-600"
												required
											/>
										</div>
									</div>

									{/* Error Message */}
									{error && <div className="text-red-600 text-sm mt-4">{error}</div>}

									<div className="flex items-center justify-start mt-4">
										<motion.button
											className="inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
											whileTap={{ scale: 0.95 }}
											disabled={loading}>
											{loading ? (
												<motion.div
													animate={{ rotate: 360 }}
													transition={{ repeat: Infinity, duration: 1 }}
													className="loader h-5 w-5 border-t-2 border-b-2 border-white rounded-full mr-2"></motion.div>
											) : (
												"Sign In"
											)}
										</motion.button>
									</div>
								</form>

								<p className="font-extralight mt-12 text-xs">
									Don't have an account?{" "}
									<Link
										to={"/register"}
										className="text-green-600 font-bold">
										Signup here
									</Link>
								</p>
								<p className="mt-16 text-center">JHCSC @ {currentYear}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
