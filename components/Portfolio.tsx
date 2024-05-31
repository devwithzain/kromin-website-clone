"use client";
import { motion } from "framer-motion";
import { portfolioItems } from "@constants";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Portfolio() {
	return (
		<motion.section className="w-full padding-y bg-white">
			<motion.div className="w-[70%] mx-auto flex justify-between gap-4 padding-x">
				<motion.div className="flex flex-col gap-20 w-[500px] h-[500px]">
					<div className="w-full h-full">
						<video
							className="w-full h-full"
							loop
							muted
							autoPlay
							src={"/jago.mp4"}
						/>
					</div>
					<div className="w-full h-full">
						<video
							className="w-full h-full"
							loop
							muted
							autoPlay
							src={"/translated.mp4"}
						/>
					</div>
					<div className="w-full h-full">
						<video
							className="w-full h-full"
							loop
							muted
							autoPlay
							src={"/audi.mp4"}
						/>
					</div>
					<div className="w-full h-full">
						<video
							className="w-full h-full"
							loop
							muted
							autoPlay
							src={"/maui.mp4"}
						/>
					</div>
					<div className="w-full h-full">
						<video
							className="w-full h-full"
							loop
							muted
							autoPlay
							src={"/acea.mp4"}
						/>
					</div>
				</motion.div>
				<div className="flex flex-col gap-20">
					{portfolioItems.map((item) => (
						<motion.div
							className="flex flex-col gap-4 w-[500px] h-[500px] justify-center"
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
									size={20}
									className="group-hover:translate-x-1 duration-200 ease-in-out text-[#A340F4]"
								/>
							</motion.div>
						</motion.div>
					))}
				</div>
			</motion.div>
			<div className="w-full mt-[50px]  flex items-center justify-center">
				<div
					className="w-fit sm:w-full xm:w-full flex items-center justify-between gap-6 px-6 py-3 rounded-full group"
					style={{
						background: "linear-gradient(90deg, #A340F4 0%, #AE48F6 100%)",
					}}>
					<p className="text-[16px] cursor-pointer text-white uppercase tracking-wider font-medium">
						all success cases
					</p>
					<FaArrowRightLong
						size={20}
						className="group-hover:translate-x-1 duration-200 ease-in-out text-white"
					/>
				</div>
			</div>
		</motion.section>
	);
}
