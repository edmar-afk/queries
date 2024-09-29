import ArrowBackIcon from "@mui/icons-material/ArrowBack";import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="fixed w-full top-0 left-0 bg-green-400 p-4 pt-8 text-white flex flex-row justify-between items-center">
			<p>Message</p>
			<Link to={'/messages'}>
				<ArrowBackIcon />
			</Link>
		</div>
	);
}

export default Header;
