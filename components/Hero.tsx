"use client";
import { TextMask } from "@animation";
import { motion } from "framer-motion";
import { Navbar, Partner } from "@components";

export default function Hero() {
	const phrases = ["Digital solutions", "for your Business."];
	return (
		<div className="w-full h-[115vh] flex flex-col items-center justify-between bg-[#1d0f41]">
			<Navbar />
			<div className="w-[70%] mx-auto flex justify-center items-center flex-col gap-14">
				<h1 className="text-white leading-none text-[80px] font-extrabold text-center font-[ProximaNova-Black]">
					<TextMask>{phrases}</TextMask>
				</h1>
				<motion.p
					initial={{ y: 100 }}
					whileInView={{ y: 0 }}
					className="sub-heading text-[#b84ff8] text-center tracking-[1.3px] font-bold overflow-hidden">
					DATA. DESIGN. DEVELOPMENT. MARKETING.
				</motion.p>
			</div>
			<div className="w-full pb-6">
				<Partner />
			</div>
		</div>
	);
}
