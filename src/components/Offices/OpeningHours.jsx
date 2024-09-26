/* eslint-disable react/prop-types */ import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import UpdateDisabledOutlinedIcon from "@mui/icons-material/UpdateDisabledOutlined";
function OpeningHours({ opening, closing }) {
	return (
		<>
			<div className="p-4 mt-4">
				<p>Opening Hours - Monday to Friday</p>
				<div className="flex flex-row items-center justify-between mt-4">
					<div className="flex items-center">
						<div className="bg-green-100 p-2 text-green-900 rounded-lg mr-2">
							<UpdateOutlinedIcon />
						</div>
						<div>
							<p className="text-[9px]">Opens at</p>
							<p>{opening}</p>
						</div>
					</div>
					<div className="flex items-center">
						<div className="bg-red-100 p-2 text-red-900 rounded-lg mr-2">
							<UpdateDisabledOutlinedIcon />
						</div>
						<div>
							<p className="text-[9px]">Closes at</p>
							<p>{closing}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OpeningHours;
