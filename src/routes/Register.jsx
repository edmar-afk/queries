import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion
import api from "../assets/api";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import logo from "../assets/img/logo.jpg";
function Register() {
	const [fullName, setFullName] = useState(""); // Use fullName instead of firstName
	const [email, setEmail] = useState(""); // State for email
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState("");
	const [, setCanSubmit] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// Function to check if passwords match
	const checkPasswordsMatch = () => {
		if (password && password2 && password !== password2) {
			setError("Passwords do not match");
		} else {
			setError((prevError) => (prevError === "Passwords do not match" ? "" : prevError));
		}
	};

	useEffect(() => {
		checkPasswordsMatch();

		// Check if all required fields are filled
		if (fullName && email && password && password2 && !error) {
			setCanSubmit(true);
		} else {
			setCanSubmit(false);
		}
	}, [fullName, email, password, password2, error]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await api.post("/api/register/", {
				first_name: fullName, // Send fullName as full_name
				username: email, // Use email as username
				password: password,
				password2: password2,
			});

			if (res.status === 201) {
				navigate("/login", { state: { successMessage: "You have been registered successfully, proceed to login." } });
			} else {
				setError("Registration failed.");
			}
		} catch (error) {
			let errorMessage = "Registration failed.";

			if (error.response) {
				if (error.response.data && typeof error.response.data === "object") {
					errorMessage = Object.values(error.response.data).join(" ");
				} else if (error.response.data && error.response.data.detail) {
					errorMessage = error.response.data.detail;
				}
			}
			setError(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="relative mx-auto w-full bg-white h-full px-6 pb-8 sm:rounded-xl sm:px-10">
				<div className="flex flex-row pt-8 items-center">
					<img
						src={logo}
						alt=""
						className="w-14"
					/>
					<p className="ml-4">FROM QUERIES TO SOLUTION</p>
				</div>
				<div className="w-full">
					<div className="mt-5">
						<div className="font-sans text-gray-900 antialiased">
							<div className="min-h-screen flex flex-col sm:justify-center items-center sm:pt-0">
								<div className="w-full sm:max-w-md px-6 py-4 bg-white">
									<form
										method="POST"
										onSubmit={handleSubmit}>
										<div className="py-8">
											<center>
												<span className="text-5xl font-semibold text-green-600">Register</span>
												<Link
													to="/"
													className="text-red-600 font-semibold flex items-center justify-center pt-3">
													<ArrowBackIcon fontSize="small" />
													Back
												</Link>
											</center>
										</div>

										<div>
											<label
												className="block font-medium text-sm text-gray-700"
												htmlFor="fullName">
												Full Name
											</label>
											<input
												type="text"
												name="fullName"
												placeholder="Full Name"
												value={fullName}
												onChange={(e) => setFullName(e.target.value)}
												className="w-full rounded-md py-2.5 px-4 border-2 text-sm border-green-600"
												required
											/>
										</div>

										<div className="mt-4">
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

										<div className="mt-4">
											<label
												className="block font-medium text-sm text-gray-700"
												htmlFor="password2">
												Confirm Password
											</label>
											<div className="relative">
												<input
													id="password2"
													type="password"
													name="password2"
													placeholder="Confirm Password"
													value={password2}
													onChange={(e) => setPassword2(e.target.value)}
													className="w-full rounded-md py-2.5 px-4 border-2 text-sm border-green-600"
													required
												/>
											</div>
										</div>

										{/* Error Message with Framer Motion */}
										{error && (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.5 }}
												className="text-red-600 text-sm mt-4">
												{error}
											</motion.div>
										)}

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
													"Register"
												)}
											</motion.button>
										</div>
									</form>

									<p className="font-extralight mt-12 text-xs">
										Already have an account?{" "}
										<Link
											to={"/login"}
											className="text-green-600 font-bold">
											Login here
										</Link>
									</p>
									<p className="mt-16 text-center">JHCSC @ {new Date().getFullYear()}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
