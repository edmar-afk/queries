import OfficeLists from "./OfficeLists";
function Offices() {
	return (
		<>
			<div className=" ml-4 py-8">
				<p className="font-bold">Explore Our Offices</p>
				<p className="text-xs font-extralight">For detailed information, browse the offices listed below.</p>
			</div>
			<div className="flex flex-row justify-evenly flex-wrap items-center mb-24">
				<OfficeLists />
			</div>
		</>
	);
}

export default Offices;
