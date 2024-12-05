/* eslint-disable react/prop-types */
import DOMPurify from "dompurify";import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Receiver({ content }) {
	// Sanitize the content
	const sanitizedContent = DOMPurify.sanitize(content);

	return (
		<div className="flex items-center justify-start">
			<p className="bg-green-200 rounded-full text-xs p-1">
				<AccountCircleIcon className="text-white" />
			</p>
			<div className="w-3 overflow-hidden">
				<div className="h-4 bg-green-400 rotate-45 transform origin-bottom-right rounded-sm"></div>
			</div>
			{/* Render sanitized content */}
			<div
				className="bg-green-400 p-4 my-6 rounded-lg text-sm text-white"
				dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
		</div>
	);
}

export default Receiver;
