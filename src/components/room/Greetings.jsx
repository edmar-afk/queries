import { useState } from "react";import { useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import data from "../../assets/data";
import logo from "../../assets/img/logo.jpg";

const OfficeDetails = () => {
	const { userId } = useParams(); // Extract the userId from the route params
	const [isVisible, setIsVisible] = useState(true); // State to control visibility

	const filteredOffices = data.offices.filter((office) => office.contactId === parseInt(userId));

	// Determine the appropriate greeting based on the current time
	const getGreeting = () => {
		const currentHour = new Date().getHours();
		if (currentHour < 12) {
			return "Good Morning";
		} else if (currentHour < 18) {
			return "Good Afternoon";
		} else {
			return "Good Evening";
		}
	};

	if (!isVisible) return null; // Hide the component if isVisible is false

	return (
		<motion.div
			className="w-[370px] p-4 fixed top-24 z-[999]"
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				type: "spring",
				stiffness: 560,
				damping: 20,
				delay: 0.5, // Add a delay of 0.5 seconds
			}}>
			{filteredOffices.length > 0 ? (
				filteredOffices.map((office) => (
					<div
						key={office.id}
						className="relative bg-gradient-to-r from-green-400 to-green-800/90 backdrop-blur-2xl h-44 text-white rounded-xl">
						<img
							src={logo}
							alt="Logo"
							className="w-32 h-32 rounded-full absolute bottom-4 right-4 -z-50"
						/>
						<div className="bg-gradient-to-r from-green-400 to-green-800/80 h-full p-4 rounded-xl">
							<p className="pt-6">{getGreeting()}</p>
							<p>
								I’m <b>{office.incharge}</b> from <b>{office.name}</b> office, and I’m here to help you!
							</p>
							<p
								className="absolute right-4 bottom-4 cursor-pointer py-0.5 px-4 rounded-md mt-4 bg-red-900 w-fit"
								onClick={() => setIsVisible(false)} // Hide component on click
							>
								Close
							</p>
						</div>
					</div>
				))
			) : (
				<p>No offices found for the given userId.</p>
			)}
		</motion.div>
	);
};

export default OfficeDetails;
