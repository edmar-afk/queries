import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/userDashboard/Header";
import Search from "../components/userDashboard/Search";
import Offices from "../components/userDashboard/Offices";
import Fab from "../components/Fab";

function UserDashboard() {
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("userData")) || {};
		if (!userData || Object.keys(userData).length === 0) {
			setRedirect(true); // Trigger redirection
		}
	}, []); // Empty dependency array, runs once on mount

	if (redirect) {
		return <Navigate to="/" />;
	}

	return (
		<>
			<Header />
			<Search />
            <Offices />
            <Fab/>
		</>
	);
}

export default UserDashboard;
