/* eslint-disable react/prop-types */ function Sender({ content }) {
	return (
		<>
			<div className="flex items-center justify-end -mb-4">
				<div className="bg-blue-400 p-4 my-6 rounded-lg text-white text-sm">{content}</div>
				<div className="w-3 overflow-hidden -z-50">
					<div className="h-4 bg-blue-400 rotate-45 transform origin-top-left rounded-sm"></div>
				</div>
				<p className="bg-blue-200 rounded-full text-xs py-3 px-2">You</p>
			</div>
		</>
	);
}

export default Sender;
