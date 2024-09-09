/* eslint-disable react/no-unescaped-entities *//* eslint-disable react/prop-types */ function Welcome({ name }) {
	return (
		<>
			<div className="flex flex-col p-4 mt-32">
				<p className="font-extralight">
					Welcome, <span className="font-bold">{name}</span>. How may I assist you today?
				</p>
				<p className="text-xs font-extralight text-center py-8">
					If you're confused about what to ask, here’s a list of questions you might want
				</p>
			</div>
		</>
	);
}

export default Welcome;
