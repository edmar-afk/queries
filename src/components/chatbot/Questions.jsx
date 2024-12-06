/* eslint-disable react/prop-types */import { useState, useEffect } from "react";
import data from "../../assets/data";

const { faqs } = data;

function Questions({ onQuestionClick }) {
	const [filteredQuestions, setFilteredQuestions] = useState([]);

	useEffect(() => {
		// Retrieve the officeName from localStorage
		const officeName = localStorage.getItem("selectedOfficeName");

		if (officeName) {
			// Filter the faqs based on officeName
			const officeFaqs = faqs.find((faq) => faq.officeName === officeName);

			// Set the filtered questions if available
			if (officeFaqs) {
				setFilteredQuestions(officeFaqs.sets);
			}
		}
	}, []);

	if (filteredQuestions.length === 0) {
		return <p className="text-center text-gray-500">No FAQs available for this office.</p>;
	}

	return (
		<div className="flex flex-row justify-evenly flex-wrap">
			{filteredQuestions.map((question, index) => (
				<div
					key={index}
					onClick={() => onQuestionClick(question.question)} // Trigger click handler
					className="bg-green-300 w-[150px] rounded-xl mb-3 border-4 border-green-900 shadow-lg text-white text-center items-center mx-4 p-2 h-[100px] flex flex-col justify-center cursor-pointer hover:bg-green-400">
					<p className="mb-2 text-[8px]">{question.question}</p>
				</div>
			))}
		</div>
	);
}

export default Questions;
