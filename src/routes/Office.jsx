import { Link, useParams } from "react-router-dom";import { useEffect } from "react";import data from "../assets/data";
import logo from "../assets/img/logo.jpg";
import BottomNav from "../components/BottomNav";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import OpeningHours from "../components/Offices/OpeningHours";
import Staffs from "../components/Offices/Staffs";
import ScrollTop from "../components/Offices/ScrollTop";

function Office() {
	const { officeId } = useParams(); // Get the officeId from the URL

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
