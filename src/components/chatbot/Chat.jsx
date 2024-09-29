import { useState, useRef, useEffect } from "react";import Questions from "./Questions";import SendIcon from "@mui/icons-material/Send";
import InfoIcon from "@mui/icons-material/Info";
import Sender from "../room/Sender";
import Receiver from "../room/Receiver";
import api from "../../assets/api";
import Welcome from "./Welcome";

function Chat() {
	const [userQuestion, setUserQuestion] = useState(""); // State to hold the user's input
	const [chatHistory, setChatHistory] = useState([]); // State to hold the conversation history
	const chatContainerRef = useRef(null); // Reference to the chat container
	const userData = JSON.parse(localStorage.getItem("userData")) || {};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent the form from refreshing the page

		if (userQuestion.trim() === "") {
			return; // Do nothing if the input is empty
		}

		try {
			// Send the question to the chatbot API
			const response = await api.post("/api/chatbot/", { question: userQuestion });

			// Extract the chatbot's answer from the response
			const chatbotAnswer = response.data.answer;

			// Update chat history with both the user's question and the chatbot's answer
			setChatHistory((prevHistory) => [
				...prevHistory,
				{ sender: "user", text: userQuestion },
				{ sender: "chatbot", text: chatbotAnswer },
			]);

			// Clear the input field
			setUserQuestion("");
		} catch (error) {
			console.error("Error sending question to chatbot:", error);
		}
	};

	// Scroll to the bottom of the chat history whenever it updates
	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
		}
	}, [chatHistory]);

	// Handle question click from Questions component
	const handleQuestionClick = (questionText) => {
		setUserQuestion(questionText); // Set clicked question as the user's input
	};

	return (
		<>
			<div
				className="flex flex-col pb-24 overflow-auto h-screen scroll-smooth" // Add scroll-smooth class here
				ref={chatContainerRef}>
				<Welcome name={userData.first_name} />
				<Questions onQuestionClick={handleQuestionClick} /> {/* Pass handler */}
				<div className="px-3">
					{chatHistory.map((message, index) =>
						message.sender === "user" ? (
							<Sender
								key={index}
								content={message.text}
							/>
						) : (
							<Receiver
								key={index}
								content={message.text}
							/>
						)
					)}
				</div>
			</div>
			<div className="fixed bottom-0 left-0 right-0 px-2 w-full py-4 bg-white">
				<form onSubmit={handleSubmit}>
					<div className="flex rounded-2xl border-2 border-green-500 overflow-hidden">
						<input
							type="text"
							placeholder="Ask Something..."
							value={userQuestion} // Bind the input to the state
							onChange={(e) => setUserQuestion(e.target.value)} // Update state on input change
							className="w-full outline-none bg-white text-sm px-5 py-3"
						/>
						<button
							type="submit"
							className="flex items-center justify-center bg-green-500 hover:bg-green-600 px-3">
							<SendIcon className="text-white" />
						</button>
					</div>
				</form>
				<div className="flex text-[9px] items-center text-center text-blue-700 mt-1">
					<InfoIcon fontSize="small" />
					The chatbot may occasionally make mistakes, so please be patient.
				</div>
			</div>
		</>
	);
}

export default Chat;
