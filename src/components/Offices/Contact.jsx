/* eslint-disable react/prop-types */ import { useState } from "react";
import numberbg from '../../assets/svg/number.svg';
import emailbg from "../../assets/svg/email.svg";
function Contact({ mobileNum, email }) {
	// State to manage the copy status for email and mobile number
	const [emailCopyStatus, setEmailCopyStatus] = useState("Copy");
	const [mobileCopyStatus, setMobileCopyStatus] = useState("Copy");

	// Function to handle copying text to clipboard
	const copyToClipboard = (text, setCopyStatus) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopyStatus("Copied from Clipboard you can now paste it somewhere else!");
			// Reset the status after 5 seconds
			setTimeout(() => setCopyStatus("Copy"), 5000);
		});
	};

	return (
		<>
			<div className="pb-72">
				<div className="flex justify-between items-center mx-6 mt-4">
					<p className="font-extralight text-lg">Contact</p>
					
				</div>

				<div className="flex flex-col justify-center mb-4">
					<div className="relative flex flex-row items-center space-y-3 rounded-xl shadow-lg p-3 w-full max-w-xs mx-auto border border-white bg-white min-w-0">
						<div className="bg-white shrink-0 place-items-center">
							<img
								src={emailbg}
								alt="staff profile"
								className="rounded-xl w-[96px]"
							/>
						</div>
						<div className="bg-white flex flex-col space-y-2 p-3">
							<div className="flex justify-between item-center">
								<p className="text-gray-500 font-medium block">Email</p>
							</div>
							<h3 className="font-black text-gray-800 text-lg break-all">{email}</h3>
							<p
								className="text-green-700 text-xs cursor-pointer"
								onClick={() => copyToClipboard(email, setEmailCopyStatus)}>
								{emailCopyStatus}
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center mb-4">
					<div className="relative flex flex-row items-center space-y-3 rounded-xl shadow-lg p-3 w-full max-w-xs mx-auto border border-white bg-white">
						<div className="bg-white shrink-0 place-items-center">
							<img
								src={numberbg}
								alt="staff profile"
								className="rounded-xl w-[96px]"
							/>
						</div>
						<div className="bg-white flex flex-col space-y-2 p-3">
							<div className="flex justify-between item-center">
								<p className="text-gray-500 font-medium block">Mobile Number</p>
							</div>
							<h3 className="font-black text-gray-800 text-lg">{mobileNum}</h3>
							<p
								className="text-green-700 text-xs cursor-pointer"
								onClick={() => copyToClipboard(mobileNum, setMobileCopyStatus)}>
								{mobileCopyStatus}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
