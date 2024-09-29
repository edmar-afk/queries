/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";import AccountCircleIcon from "@mui/icons-material/AccountCircle";import api from "../../assets/api";
import { Link } from "react-router-dom";

function UserLists() {
	const [heads, setHeads] = useState([]); // State to hold the list of superusers
	const [error, setError] = useState(null); // State to handle errors
	const [loading, setLoading] = useState(true); // State to handle loading
	const currentUser = JSON.parse(localStorage.getItem("userData")) || {};

	// Fetch data from the API
	const fetchUsers = async () => {
		try {
			const response = await api.get(`/api/chat/rooms/`); // Fetch superusers from API
      setHeads(response.data); // Set the fetched data to state
     
		} catch (error) {
			console.error("Error fetching superusers:", error);
			setError("Failed to load heads"); // Set error state if request fails
		} finally {
			setLoading(false); // End loading state
		}
	};

	useEffect(() => {
		fetchUsers(); // Call the async function on component mount
	}, []);

	return (
		<>
			<p className="p-4 font-extralight">
				Hello <span className="font-bold">{currentUser.first_name}</span> here's the people who ask your guidance
			</p>
			<div className="">
				<div className="">
					<div className="w-full mx-auto">
						<div className="md:flex">
							<div className="w-full p-4">
								{loading ? (
									<p>Loading heads...</p> // Show loading text while fetching data
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
															<span className="font-medium text-black">{head.other_user.first_name}</span>
															<span className="text-sm text-gray-400 ">Tap to see message</span>
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

export default UserLists;
