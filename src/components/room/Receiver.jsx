/* eslint-disable react/prop-types */ import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function Receiver({ content }) {
	return (
		<>
			<div className="flex items-center justify-start">
				<p className="bg-green-200 rounded-full text-xs p-1">
					<AccountCircleIcon className="text-white" />
				</p>
				<div className="w-3 overflow-hidden">
					<div className="h-4 bg-green-400 rotate-45 transform origin-bottom-right rounded-sm"></div>
				</div>
				<div className="bg-green-400 p-4 my-6 rounded-lg text-sm text-white">{content}</div>
			</div>
		</>
	);
}

export default Receiver;
