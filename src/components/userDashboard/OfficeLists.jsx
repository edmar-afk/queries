import { motion } from "framer-motion"; import data from "../../assets/data";
import { Link } from "react-router-dom";

function OfficeLists() {
	return (
		<>
			{data.officeData.map((office, index) => (
				<motion.div
					key={office.id}
					className="flex flex-col items-center mb-8"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 10,
						delay: index * 0.1, // Adding delay to each element
					}}>
					<Link
						to={`/user-dashboard/office/${office.id}`}
						className="relative rounded-lg text-center text-white">
						<img
							src={office.officeImg} // Use office.officeImg here
							alt={office.officeName} // Add alt text for accessibility
							className="w-24"
						/>
					</Link>
					<p>{office.officeName}</p>
				</motion.div>
			))}
		</>
	);
}

export default OfficeLists;
