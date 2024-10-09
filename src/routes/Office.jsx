import { Link, useParams } from "react-router-dom";import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import data from "../assets/data";
import logo from "../assets/img/logo.jpg";
import BottomNav from "../components/BottomNav";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import OpeningHours from "../components/Offices/OpeningHours";
import Staffs from "../components/Offices/Staffs";
import ScrollTop from "../components/Offices/ScrollTop";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";

function Office() {
	const { officeId } = useParams(); // Get the officeId from the URL
	const [, setShowMobileNum] = useState(true);
	const [, setShowEmail] = useState(true);
	const [copiedMessage, setCopiedMessage] = useState(""); // Message to show on copy

	const handleCopy = (text, setVisibility, message) => {
		navigator.clipboard.writeText(text);
		setVisibility(false); // Hide the content after copying
		setCopiedMessage(message); // Set the copied message

		// Reset the message after 2.5 seconds
		setTimeout(() => {
			setCopiedMessage("");
		}, 2500);
	};

	// Convert officeId to number for comparison
	const office = data.offices.find((office) => office.id === parseInt(officeId));
	const currentUser = JSON.parse(localStorage.getItem("userData")) || {};

	// Scroll to top when the component loads
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top of the page
	}, []); // Empty dependency array to run only on component mount

	if (!office) {
		return <h2>Office not found</h2>;
	}

	return (
		<>
			{/* Fixed div at the top for copied message */}
			{copiedMessage && (
				<motion.div
					className="fixed top-0 pt-12 left-0 h-24 right-0 bg-gray-900 text-white p-2 text-center z-50"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
					transition={{ duration: 1 }}>
					{copiedMessage}
				</motion.div>
			)}

			{/* First div to cover the screen */}
			<div className="relative">
				<img
					src={office.img}
					alt={office.name}
					className="fixed w-full top-0 -z-50 h-full"
				/>
			</div>

			{/* Second div hidden below the fold, requiring scroll */}
			<div className="relative bg-gradient-to-b from-white from-60% pb-96 pt-14">
				<div className="bg-white p-4">
					<div className="flex flex-row items-center justify-between">
						<div className="flex items-center">
							<img
								src={logo}
								alt=""
								className="w-14"
							/>
							<p className="ml-2 font-bold text-xl">{office.name}</p>
						</div>
						<Link
							to={"/user-dashboard"}
							className="flex flex-col items-center text-red-600">
							<KeyboardReturnOutlinedIcon />
							<p className="text-[8px] -mt-1">Back</p>
						</Link>
					</div>
					<div className="flex flex-col mt-4">
						<p className="font-extralight">Head In-charge</p>
						<div className="flex flex-row items-center justify-between">
							<div className="flex items-center">
								<AdminPanelSettingsOutlinedIcon sx={{ fontSize: 60 }} />
								<div className="ml-2">
									{office.incharge}
									<p className="text-xs">{office.position}</p>
								</div>
							</div>
							<Link
								to={`/room/${currentUser.id}/${office.contactId}`}
								className="bg-green-600 p-2 rounded-full text-white shadow-lg">
								<TextsmsOutlinedIcon />
							</Link>
						</div>

						<div className="flex flex-row justify-evenly mt-8">
							{/* Mobile Number */}
							<p
								className="bg-green-700 w-fit p-1 rounded-full text-white shadow-lg cursor-pointer"
								onClick={() => handleCopy(office.mobileNum, setShowMobileNum, "Mobile Number Copied!")}>
								<LocalPhoneIcon />
								
							</p>

							{/* Email */}
							<p
								className="bg-blue-700 w-fit p-1 rounded-full text-white shadow-lg cursor-pointer"
								onClick={() => handleCopy(office.email, setShowEmail, "Email Copied!")}>
								<LocalPostOfficeIcon />
							</p>
						</div>
						<OpeningHours
							opening={office.opening}
							closing={office.closing}
						/>
					</div>
				</div>
				<Staffs
					staffs={office.staffs}
					officeName={office.name}
				/>
			</div>
			<ScrollTop />
			<BottomNav />
		</>
	);
}

export default Office;
