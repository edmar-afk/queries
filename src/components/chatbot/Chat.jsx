import Questions from "./Questions";
import SendIcon from "@mui/icons-material/Send";
import InfoIcon from "@mui/icons-material/Info";
function Chat() {
	return (
		<>
			<Questions />

			<div className="fixed bottom-0 w-[350px] left-0 right-0 mx-auto my-4 bg-white">
				<div className="flex  rounded-2xl border-2 border-green-500 overflow-hidden">
					<input
						type="email"
						placeholder="Ask Something..."
						className="w-full outline-none bg-white text-sm px-5 py-3"
					/>
					<button
						type="button"
						className="flex items-center justify-center bg-green-500 hover:bg-green-600 px-3">
						<SendIcon className="text-white" />
					</button>
				</div>
				<div className="flex text-[9px] items-center text-center text-blue-700 mt-1">
					<InfoIcon fontSize="small" />
					The chatbot may occasionally make mistakes, so please be patient.
				</div>
			</div>
		</>
	);
}

export default Chat;
