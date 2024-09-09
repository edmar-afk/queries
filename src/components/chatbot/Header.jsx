import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";import { Link } from "react-router-dom";
function Header() {
	return (
		<div className="flex p-4 mt-8 items-center justify-between">
			<Link to={"/user-dashboard"}>
				<ArrowBackIosIcon />
			</Link>
			<p>Student Support Chatbot</p>
		</div>
	);
}

export default Header;
