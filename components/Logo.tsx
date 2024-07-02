import Link from "next/link";
import Image from "next/image";
import { onlyLogo } from "@public";

export default function Logo() {
	return (
		<Link
			href={"/"}
			className="flex items-center gap-2">
			<Image
				className=""
				src={onlyLogo}
				height="30"
				width="30"
				alt="Logo"
			/>
			<h1 className="text-[30px] font-[Muli] font-semibold uppercase text-white">
				Kromin
			</h1>
		</Link>
	);
}
