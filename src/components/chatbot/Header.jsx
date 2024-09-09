import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";import { Link } from "react-router-dom";


function Header() {
	return (
		<div className="fixed -top-10 pt-12 flex p-4 mt-8 items-center justify-between backdrop-blur bg-white/10 w-full">
			<Link to={"/user-dashboard"}>
				<ArrowBackIosIcon />
			</Link>
			<p>Student Support Chatbot</p>
		</div>
	);
}

export default Header;
