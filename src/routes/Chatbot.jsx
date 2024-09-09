import Chat from "../components/chatbot/Chat";
import Header from "../components/chatbot/Header";import Welcome from "../components/chatbot/Welcome";
function Chatbot() {
	const userData = JSON.parse(localStorage.getItem("userData")) || {};
	return (
		<>
			<Header />
            <Welcome name={userData.first_name} />
            <Chat/>
		</>
	);
}

export default Chatbot;
