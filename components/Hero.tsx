import Navbar from "./Navbar";
import { TextMask } from "@animation";
import { Partner } from "@components";

export default function Hero() {
	const phrases = ["Digital solutions", "for your Business."];
	return (
		<div className="w-full h-screen flex flex-col items-center justify-between bg-[#1d0f41]">
			<Navbar />
			<div className="w-[70%] mx-auto flex justify-center items-center flex-col gap-14">
				<h1 className="text-white leading-none text-[80px] font-extrabold text-center font-[ProximaNova-Black]">
					<TextMask>{phrases}</TextMask>
				</h1>
				<p className="text-[16px] text-[#b84ff8] text-center tracking-[1.3px] font-bold">
					DATA. DESIGN. DEVELOPMENT. MARKETING.
				</p>
			</div>
			<div className="w-full pb-6">
				<Partner />
			</div>
		</div>
	);
}
