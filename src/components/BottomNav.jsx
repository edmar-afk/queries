import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";import ThreePOutlinedIcon from "@mui/icons-material/ThreePOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { NavLink } from "react-router-dom";

function BottomNav() {
	return (
		<>
			<div className="w-full h-screen">
				<section
					id="bottom-navigation"
					className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
					<div
						id="tabs"
						className="flex justify-between">
						<NavLink
							to="/user-dashboard"
							className={({ isActive }) =>
								`w-full justify-center inline-block text-center pt-2 pb-1 ${
									isActive ? "bg-green-500 text-white" : "text-gray-600"
								}`
							}>
							<HomeOutlinedIcon />
							<span className="tab tab-home block text-xs">Home</span>
						</NavLink>
						<NavLink
							to="/chatbot"
							className={({ isActive }) =>
								`w-full justify-center inline-block text-center pt-2 pb-1 ${
									isActive ? "bg-green-500 text-white" : "text-gray-600"
								}`
							}>
							<ThreePOutlinedIcon />
							<span className="tab tab-kategori block text-xs">Chatbot</span>
						</NavLink>
						<NavLink
							to="/messages"
							className={({ isActive }) =>
								`w-full justify-center inline-block text-center pt-2 pb-1 ${
									isActive ? "bg-green-500 text-white" : "text-gray-600"
								}`
							}>
							<TextsmsOutlinedIcon />
							<span className="tab tab-explore block text-xs">Messages</span>
						</NavLink>
						<NavLink
							to="/profile"
							className={({ isActive }) =>
								`w-full justify-center inline-block text-center pt-2 pb-1 ${
									isActive ? "bg-green-500 text-white" : "text-gray-600"
								}`
							}>
							<BadgeOutlinedIcon />
							<span className="tab tab-whishlist block text-xs">Profile</span>
						</NavLink>
					</div>
				</section>
			</div>
		</>
	);
}

export default BottomNav;
