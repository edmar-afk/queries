/* eslint-disable react/prop-types */
import data from "../../assets/data";const { questions } = data;

function Questions({ onQuestionClick }) {
	// Accept the onQuestionClick prop
	return (
		<div className="flex flex-row justify-evenly flex-wrap">
			{questions.map((question) => (
				<div
					key={question.id}
					onClick={() => onQuestionClick(question.text)} // Trigger click handler
					className="bg-green-300 w-[150px] rounded-xl mb-3 border-4 border-green-900 shadow-lg text-white text-center items-center mx-4 p-2 h-[100px] flex flex-col justify-center cursor-pointer hover:bg-green-400">
					<p className="mb-2 text-[10px]">{question.text}</p>
				</div>
			))}
		</div>
	);
}

export default Questions;
