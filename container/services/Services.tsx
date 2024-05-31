import { servicesPageItem } from "@constants";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Services() {
	return (
		<section className="w-full padding-y bg-white">
			<div className="w-[70%] mx-auto flex flex-col justify-between gap-4 padding-x">
				<h1 className="text-[40px] leading-none font-extrabold mb-[40px] text-[#1d0f41dc]">
					Services
				</h1>
				{servicesPageItem.map((item) => (
					<div
						className="w-full flex gap-4 mb-20"
						key={item.id}>
						<div className="w-1/2 flex flex-col">
							<h4 className="text-[30px] leading-none font-semibold text-[#1d0f41dc] mb-10">
								{item.title}
							</h4>
							<div className="flex gap-2 flex-col">
								<p className="flex items-center gap-4 text-[18px] text-[#b84ff8] cursor-pointer tracking-wider font-bold">
									<span className="w-2 h-2 rounded-full bg-[#b84ff8]" />
									{item.link1}
								</p>
								<p className="flex items-center gap-4 text-[18px] text-[#b84ff8] cursor-pointer tracking-wider font-bold">
									<span className="w-2 h-2 rounded-full bg-[#b84ff8]" />
									{item.link2}
								</p>
							</div>
						</div>
						<div className="w-1/2 flex flex-col gap-4">
							<p className="font-[Muli] text-[20px] font-normal leading-[40px] text-[#1d0f41be]">
								{item.para}
							</p>
							<div className="w-full flex items-center gap-4 group">
								<p className="text-[16px] cursor-pointer text-[#1d0f41] uppercase tracking-wider font-semibold">
									find out more
								</p>
								<FaArrowRightLong
									size={20}
									className="group-hover:translate-x-1 duration-200 ease-in-out text-[#b84ff8]"
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
