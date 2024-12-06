/* eslint-disable react-hooks/exhaustive-deps */
import Receiver from "./Receiver";import Sender from "./Sender";
import api from "../../assets/api";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react"; // Added useRef for scrolling
import Greetings from '../room/Greetings';
function Body() {
	const { currentUserId, userId } = useParams();
	const [message, setMessage] = useState("");
	const [isSending, setIsSending] = useState(false);
	const [messages, setMessages] = useState([]);
	const messagesEndRef = useRef(null); // Reference for the last message

	// Scroll to the bottom when messages are updated
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const fetchMessages = async () => {
		try {
			const response = await api.get(`/api/chat-room/${currentUserId}/${userId}/`);
			setMessages(response.data.messages);
			scrollToBottom(); // Scroll after messages are fetched
		} catch (error) {
			console.error("Error fetching messages:", error);
		}
	};

	// Fetch messages initially and set interval to refresh every 5 seconds
	useEffect(() => {
		fetchMessages(); // Initial fetch
		const interval = setInterval(() => {
			fetchMessages(); // Refresh messages every 5 seconds
		}, 5000);

		return () => clearInterval(interval); // Cleanup interval on unmount
	}, [currentUserId, userId]);

	useEffect(() => {
		scrollToBottom(); // Scroll when new messages are added
	}, [messages]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!message.trim()) {
			return;
		}

		setIsSending(true);

		try {
			const response = await api.post(`/api/message/${currentUserId}/${userId}/`, {
				content: message,
			});

			// Update messages with the new message and scroll to the bottom
			setMessages((prevMessages) => [...prevMessages, response.data]);
			setMessage(""); // Clear the message input
		} catch (error) {
			console.error("Error sending message:", error);
		} finally {
			setIsSending(false);
		}
	};

	return (
		<>
			<main className="flex flex-col pt-24 h-screen">
				<Greetings/>
				<section className="container mx-auto p-4 pb-24">
					{/* Display messages in a conversation-like format */}
					{messages.map((message) =>
						message.sender === parseInt(currentUserId) ? (
							<Sender
								key={message.id}
								content={message.content}
								timestamp={message.timestamp}
							/>
						) : (
							<Receiver
								key={message.id}
								content={message.content}
								timestamp={message.timestamp}
							/>
						)
					)}
					{/* Add an empty div to scroll to */}
					<div ref={messagesEndRef} />
				</section>
			</main>

			<div className="fixed bottom-0 py-2 w-full mx-auto bg-green-50">
				<form onSubmit={handleSubmit}>
					<label
						htmlFor="chat"
						className="sr-only">
						Your message
					</label>
					<div className="flex items-center py-2 px-3 rounded-lg">
						<textarea
							id="chat"
							rows="1"
							className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 placeholder-gray-400"
							placeholder="Your message..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							disabled={isSending}></textarea>
						<button
							type="submit"
							className="inline-flex justify-center p-2 text-green-600 rounded-full cursor-pointer"
							disabled={isSending}>
							<svg
								className={`w-6 h-6 rotate-90 ${isSending ? "animate-spin" : ""}`}
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Body;
