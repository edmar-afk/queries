/* eslint-disable react/no-unescaped-entities */import respectbg from "../../assets/svg/respect.svg";import arguebg from "../../assets/svg/argue.svg";import thankyoubg from '../../assets/svg/thankyou.svg';

function Rules() {
	return (
		<>
			<p className="p-4 italic">
				"Before asking questions to the head-in-charge, consider the following attitude for good communication."
			</p>
			<div className="flex flex-row p-4 space-x-4 overflow-x-auto w-full">
				<div className="relative p-2 border-2 border-green-600 rounded-2xl bg-green-50 shadow-lg min-w-[200px]">
					<img
						src={respectbg}
						alt=""
						className="w-44"
					/>
					<p className="absolute bottom-4 bg-green-600/70 text-white py-1 px-4 rounded-lg mx-3">
						Always ask with <br /> Respect.
					</p>
				</div>
				<div className="relative p-2 border-2 border-green-600 rounded-2xl bg-green-50 shadow-lg min-w-[200px]">
					<img
						src={arguebg}
						alt=""
						className="w-44"
					/>
					<p className="absolute bottom-4 bg-green-600/70 text-white py-1 px-4 rounded-lg mx-3">
						Never argue with staffs.
					</p>
				</div>
				<div className="relative p-2 border-2 border-green-600 rounded-2xl bg-green-50 shadow-lg min-w-[200px]">
					<img
						src={thankyoubg}
						alt=""
						className="w-44"
					/>
					<p className="text-xs absolute bottom-4 bg-green-600/70 text-white py-1 px-4 rounded-lg mx-3">
						Say thank you after they answered your question.
					</p>
				</div>
			</div>
		</>
	);
}

export default Rules;
