import Header from "../components/messages/Header";import BottomNav from "../components/BottomNav";
import Rules from "../components/messages/Rules";
import HeadsList from "../components/messages/HeadsList";
import UserLists from "../components/messages/UsersLists";
function Messages() {
	const currentUser = JSON.parse(localStorage.getItem("userData")) || {};

	return (
		<>
			<Header />
			<Rules />
			{currentUser.is_superuser ? <UserLists /> : <HeadsList />}

			<BottomNav />
		</>
	);
}

export default Messages;
