import Image from "next/image";
import { heroImg } from "@public";
import { TextMask } from "@animation";
import { Navbar, Partner } from "@components";

export default function Hero() {
	const phrases = ["Digital solutions", "for your Business."];
	const phrases1 = ["DATA. DESIGN. DEVELOPMENT. MARKETING."];
	return (
		<div className="w-full h-[115vh] flex flex-col items-center justify-between relative">
			<Navbar />
			<div className="w-[70%] sm:w-full xm:w-full relative flex gap-10 items-center padding-x  justify-between">
				<div
					className="flex items-center absolute -left-[10%] justify-center transition-all duration-200 ease-linear"
					id="container">
					<div className="h-[400px] blur-[80px] hero-gradient rounded-full w-[400px]" />
					<Image
						src={heroImg}
						alt="hero"
						className="absolute top-[15%] left-5 transition-all duration-200 ease-linear sm:hidden xm:hidden"
					/>
				</div>
				<div className="w-full flex h-full items-center justify-center flex-col gap-10 overflow-hidden">
					<h1 className="text-white leading-none text-[80px] sm:text-[60px] xm:text-[60px] font-extrabold text-center font-[ProximaNova-Black]">
						<TextMask>{phrases}</TextMask>
					</h1>
					<p className="sub-heading text-[#b84ff8] text-center tracking-[1.3px] font-bold overflow-hidden">
						<TextMask>{phrases1}</TextMask>
					</p>
				</div>
			</div>
			<div className="w-full pb-6">
				<Partner />
			</div>
		</div>
	);
}
