import { useEffect, useState } from "react";import AccountCircleIcon from "@mui/icons-material/AccountCircle";import api from "../../assets/api";
import { Link } from "react-router-dom";
import Loading from "../Loading";

function HeadsList() {
	const [heads, setHeads] = useState([]); // State to hold the list of superusers
	const [error, setError] = useState(null); // State to handle errors
	const [loading, setLoading] = useState(true); // State to handle loading
	const currentUser = JSON.parse(localStorage.getItem("userData")) || {};

	// Fetch data from the API
	const fetchSuperusers = async () => {
		try {
			const response = await api.get(`/api/superusers/`); // Fetch superusers from API
			setHeads(response.data); // Set the fetched data to state
		} catch (error) {
			console.error("Error fetching superusers:", error);
			setError("Failed to load heads"); // Set error state if request fails
		} finally {
			setLoading(false); // End loading state
		}
	};

	useEffect(() => {
		fetchSuperusers(); // Call the async function on component mount
	}, []);

	return (
		<>
			<p className="p-4 font-extralight">List of Head in-charge in every Office of JHCSC.</p>
			<div className="">
				<div className="">
					<div className="w-full mx-auto">
						<div className="md:flex">
							<div className="w-full p-4">
								{loading ? (
									<Loading/>
								) : error ? (
									<p className="text-red-500">{error}</p> // Show error message if any
								) : (
									<ul>
										{heads.length > 0 ? (
											heads.map((head) => (
												<li
													key={head.id}
													className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
													<Link
														to={`/room/${currentUser.id}/${head.id}`}
														className="flex ml-2">
														<AccountCircleIcon
															fontSize="large"
															className="text-green-700"
														/>
														<div className="flex flex-col ml-2">
															<span className="font-medium text-black">{head.first_name}</span>
															<span className="text-sm text-gray-400 truncate w-32">{head.date_joined}</span>
														</div>
													</Link>
												</li>
											))
										) : (
											<li className="p-4 text-center text-gray-500">No heads available</li>
										)}
									</ul>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeadsList;
