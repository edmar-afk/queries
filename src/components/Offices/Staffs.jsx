/* eslint-disable react/prop-types */ import staffImg from "../../assets/svg/staffs.svg";import PeopleIcon from "@mui/icons-material/People";
function Staffs({ staffs, officeName }) {
	return (
		<>
			<div className="pb-72">
				<div className="flex justify-between items-center mx-6 mt-4">
					<p className="font-extralight text-lg">Staffs of {officeName}</p>
					<PeopleIcon />
				</div>
				{staffs.map((staff, index) => (
					<div
						key={index}
						className="flex flex-col justify-center mb-4">
						<div className="relative flex flex-row items-center space-y-3 rounded-xl shadow-lg p-3 w-full max-w-xs mx-auto border border-white bg-white">
							<div className="bg-white shrink-0 place-items-center">
								<img
									src={staffImg}
									alt="staff profile"
									className="rounded-xl w-[96px]"
								/>
							</div>
							<div className="bg-white flex flex-col space-y-2 p-3">
								<div className="flex justify-between item-center">
									<p className="text-gray-500 font-medium block">{staff.role}</p>
								</div>
								<h3 className="font-black text-gray-800 text-xl">{staff.name}</h3>
								<p className="md:text-lg text-gray-500 text-base">
									{/* Add any additional info you want to display here */}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Staffs;
