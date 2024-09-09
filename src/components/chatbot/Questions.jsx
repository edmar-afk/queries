import data from "../../assets/data";const { questions } = data;

function Questions() {
	return (
		<div className="flex flex-row justify-evenly flex-wrap mb-32">
			{questions.map((question) => (
				<div
					key={question.id}
					className="bg-green-300 w-[150px] rounded-xl mb-3 text-white text-center items-center mx-4 p-2 h-[150px] flex flex-col justify-center">
					<p className="mb-2">{question.text}</p>
				</div>
			))}
		</div>
	);
}

export default Questions;
