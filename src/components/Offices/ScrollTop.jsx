import { useState, useEffect } from "react";import { motion, AnimatePresence } from "framer-motion";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

function ScrollTop() {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		const scrollPosition = window.scrollY + window.innerHeight; // Current scroll + visible window height
		const documentHeight = document.documentElement.scrollHeight; // Full document height

		// Show button when scrolled past 80% of the page
		if (scrollPosition / documentHeight > 0.5) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll); // Cleanup
		};
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					className="fixed bottom-20 left-[45%] bg-green-600 text-white p-2 rounded-full cursor-pointer"
					onClick={handleScrollToTop}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1, y: [10, 0], transition: { type: "spring", stiffness: 900, damping: 10 } }}
					exit={{ opacity: 0, scale: 0.5, y: 10, transition: { duration: 0.3 } }}>
					<VerticalAlignTopIcon fontSize="large" />
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default ScrollTop;
