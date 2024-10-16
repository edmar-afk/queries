import { motion } from "framer-motion";import logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";
function Homepage() {
	// Variants for the animations
	const scaleVariant = {
		hidden: { scale: 0 },
		visible: { scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
	};

	const fadeInVariant = {
		hidden: { opacity: 0, x: -100 },
		visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50, damping: 10 } },
	};

	return (
		<>
			<div className="flex flex-row items-center p-4 justify-center pt-12">
				<motion.p
					className="text-2xl text-center font-bold"
					initial="hidden"
					animate="visible"
					variants={scaleVariant}>
					From Queries to Solution
				</motion.p>
			</div>
			<motion.div
				className="flex flex-col"
				initial="hidden"
				animate="visible"
				variants={fadeInVariant}>
				<motion.img
					src={logo}
					alt=""
					className="w-64 mx-auto py-8"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
					whileHover={{ scale: 1.1, rotate: 10 }}
				/>
				<motion.p
					className="mx-8 text-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.6 } }}>
					JHCSC Student Services Support Chatbot is your friendly virtual assistant, ready to help you navigate the
					world of student life at J.H. Cerilles State College.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 10, delay: 0.4 } }}
					whileHover={{ scale: 1.05 }}
					className=" mx-auto  mt-12">
					<Link
						to={"/login"}
						className="py-1.5 px-6 text-green-600 rounded-xl border-2 border-green-600">
						Sign in
					</Link>
				</motion.div>

				<p className="mt-16 text-center mb-8">JHCSC @ {new Date().getFullYear()}</p>
			</motion.div>
		</>
	);
}

export default Homepage;
