"use client";
import { motion } from "framer-motion";
import { portfolioItems } from "@constants";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Portfolio() {
	return (
		<motion.section className="w-full padding-y bg-white">
			<motion.div className="w-[70%] mx-auto flex justify-between gap-4 padding-x">
				<motion.div className="w-1/2 flex flex-col gap-6 sticky top-[20%] h-full">
					<div className="w-[500px]">
						<video
							className="w-full h-full"
							loop
							autoPlay
							src={"/jago.mp4"}
						/>
					</div>
				</motion.div>
				<div className="flex flex-col gap-20">
					{portfolioItems.map((item) => (
						<motion.div
							className="flex flex-col gap-4 w-[400px] h-[600px] justify-center"
							key={item.id}>
							<motion.h1 className="text-[50px] leading-none font-extrabold text-[#1d0f41]">
								{item.title}
							</motion.h1>
							<motion.p className="font-[Muli] text-[30px] text-[#1d0f41ab] leading-[40px] font-medium">
								{item.para}
							</motion.p>
							<motion.div className="w-fit sm:w-full xm:w-full flex items-center justify-between gap-6 rounded-full group">
								<motion.p className="text-[16px] cursor-pointer uppercase tracking-wider font-bold text-[#1d0f41]">
									get inspired
								</motion.p>
								<FaArrowRightLong
									size={25}
									className="group-hover:translate-x-1 duration-200 ease-in-out text-[#A340F4]"
								/>
							</motion.div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</motion.section>
	);
}
