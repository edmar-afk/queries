import { motion } from "framer-motion";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { Link } from "react-router-dom";

function Fab() {
	return (
		<div className="fixed bottom-6 right-6 flex flex-row items-center z-50">
			<motion.p
				className="mr-2 text-xs"
				initial={{ opacity: 1 }}
				animate={{ opacity: [1, 1, 0, 0, 1] }}
				transition={{
					duration: 10, // total duration of 10 seconds (5s show + 5s hide)
					ease: "linear",
					repeat: Infinity,
					repeatType: "loop",
					times: [0, 0.5, 0.5, 1], // show for 5s, hide for 5s, show again
				}}>
				Confused? I can help you!
			</motion.p>
			<Link
				to={"/chatbot"}
				className="bg-green-500 rounded-full animate-bounce text-white font-medium p-2 flex items-center justify-center hover:bg-green-600 transition duration-300 ease-in-out shadow-lg">
				<ContactSupportIcon fontSize="large"/>
			</Link>
		</div>
	);
}

export default Fab;
