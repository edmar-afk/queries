import Header from "../components/userDashboard/Header";
import Search from "../components/userDashboard/Search";
import Offices from '../components/userDashboard/Offices'

function UserDashboard() {
	const userData = JSON.parse(localStorage.getItem("userData")) || {};
	return (
		<>
            <Header />
            <Search />
            <Offices/>
		</>
	);
}

export default UserDashboard;
