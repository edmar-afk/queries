import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import userbg from '../assets/svg/user.svg';
import headbg from '../assets/svg/head.svg';

function Profile() {
	const currentUser = JSON.parse(localStorage.getItem("userData")) || {};
	return (
		<>
			<div className="mx-auto my-10 flex w-full px-4 flex-col items-center rounded-xl border py-4 text-center">
				<div className="mb-4 md:mr-6 md:mb-0">
					<img
						className="h-56 rounded-lg object-cover md:w-56"
						src={currentUser.is_superuser ? headbg : userbg}
						alt=""
					/>
				</div>
				<div className="w-full">
					<p className="text-xl font-medium text-gray-700">{currentUser.first_name}</p>
					<p className="mb-4 text-sm font-medium text-gray-500">
						{currentUser.is_superuser ? "Head In-charge" : "User"}
					</p>
					<div className="flex w-full">
						<div className="flex flex-col items-center rounded-xl bg-gray-100 px-4 py-2 w-full">
							<p className="text-sm font-medium text-gray-500">Date Joined</p>
							<p className="text-3xl font-medium text-gray-600">
								{new Date(currentUser.date_joined).toLocaleDateString("en-US", {
									year: "numeric",
									month: "short",
									day: "numeric",
								})}
							</p>
						</div>
					</div>
					<div className="mb-3"></div>
					<div className="flex space-x-2">
						<Link
							to={"/logout"}
							className="w-full rounded-lg border-2 border-transparent bg-red-600 px-4 py-2 font-medium text-white">
							Logout
						</Link>
					</div>
				</div>
			</div>

			<BottomNav />
		</>
	);
}

export default Profile;
