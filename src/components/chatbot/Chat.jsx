import Questions from "./Questions";import SendIcon from "@mui/icons-material/Send";

function Chat() {
	return (
		<>
			<Questions />

			<div className="fixed bottom-0 w-[350px] left-0 right-0 flex rounded-2xl border-2 border-green-500 overflow-hidden mx-auto font-[sans-serif] my-4">
				<input
					type="email"
					placeholder="Search Something..."
					className="w-full outline-none bg-white text-sm px-5 py-3"
				/>
				<button
					type="button"
					className="flex items-center justify-center bg-green-500 hover:bg-green-600 px-3">
					<SendIcon className="text-white" />
				</button>
			</div>
		</>
	);
}

export default Chat;
