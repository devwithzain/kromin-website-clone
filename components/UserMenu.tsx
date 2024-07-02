"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TUserMenuProps } from "@types";
import useLoginModal from "@hooks/useLoginModal";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { CiSettings } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { FiLogIn } from "react-icons/fi";

export default function UserMenu({ currentUser }: TUserMenuProps) {
	const router = useRouter();
	const loginModal = useLoginModal();
	const [isOpen, setIsOpen] = useState(false);
	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value);
	}, []);
	const onRent = useCallback(() => {
		if (!currentUser) {
			return loginModal.onOpen();
		}
	}, [loginModal, currentUser]);
	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={onRent}
					className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
					Airbnb your home
				</div>
				<div
					onClick={toggleOpen}
					className="p-4 text-white md:py-1 md:px-2 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
					<AiOutlineMenu size={25} />
					<div className="hidden md:block">
						<Avatar src={currentUser?.image} />
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="absolute rounded-xl shadow-md w-fit bg-white overflow-hidden right-0 top-12 text-sm">
					<div className="flex flex-col cursor-pointer">
						{currentUser ? (
							<>
								<MenuItem
									label="Setting"
									onClick={() => router.push("/admins/user-profile")}
									icon={<CiSettings size={20} />}
								/>
								<hr />
								<MenuItem
									label="Logout"
									onClick={() => signOut()}
									icon={<LuLogOut size={20} />}
								/>
							</>
						) : (
							<>
								<MenuItem
									icon={<FiLogIn size={20} />}
									label="Login"
									onClick={loginModal.onOpen}
								/>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
