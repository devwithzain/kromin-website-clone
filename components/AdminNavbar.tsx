import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { TNavbarProps } from "@types";
import { CiSearch } from "react-icons/ci";

export default function AdminNavbar({ currentUser }: TNavbarProps) {
	return (
		<div className="w-full padding-x py-4 border-b">
			<div className="w-full flex items-center justify-between gap-3">
				<Logo />
				<div className="flex px-5 py-[10px] items-center justify-between bg-[#F0F3F4] w-[25%] rounded-full">
					<input
						type="text"
						className="w-full text-[18px] outline-none bg-transparent border-none font-normal"
						placeholder="Search..."
					/>
					<CiSearch size={30} />
				</div>
				<UserMenu currentUser={currentUser} />
			</div>
		</div>
	);
}
