import getCurrentUser from "@actions/getCurrentUser";

export default async function UserProfile() {
	const user = await getCurrentUser();
	return (
		<div className="w-full h-screen bg-white">
			<p>{user?.currentUser.id}</p>
			<p>{user?.currentUser.name}</p>
			<p>{user?.currentUser.email}</p>
			<p>{user?.currentUser.hashedPassword}</p>
		</div>
	);
}
