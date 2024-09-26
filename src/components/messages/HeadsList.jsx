import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeadsList() {
	return (
		<>
			<p className="p-4 font-extralight">List of Head in-charge in every Office of JHCSC.</p>
			<div className="">
				<div className="">
					<div className="w-full mx-auto">
						<div className="md:flex">
							<div className="w-full p-4">
								<ul>
									<li className="flex justify-between items-center bg-white mt-2 p-2 hover:shadow-lg rounded cursor-pointer transition">
										<div className="flex ml-2">
											{" "}
											<AccountCircleIcon fontSize="large" className="text-green-700"/>
											<div className="flex flex-col ml-2">
												{" "}
												<span className="font-medium text-black">Adelina Mejoy</span>
												<span className="text-sm text-gray-400 truncate w-32">
													Hello
												</span>{" "}
											</div>
										</div>
										<div className="flex flex-col items-center">
											{" "}
											<span className="text-green-800 text-xs">Registrar</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeadsList;
