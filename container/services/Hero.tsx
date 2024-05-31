import { TextMask } from "@animation";

export default function Hero() {
	const phrases = [
		"We know how to innovate, ",
		"We believe in ideas and ",
		"Results",
	];
	return (
		<div className="w-full h-screen relative flex flex-col items-center justify-center">
			<div className="w-[70%] mx-auto flex justify-center flex-col gap-6">
				<div className="w-[100px] h-[3px] rounded-full bg-[#b84ff8]" />
				<h1 className="text-white text-[56px] font-extrabold">
					<TextMask>{phrases}</TextMask>
				</h1>
				<p className="text-[20px] text-white tracking-[1.3px]">
					We see each new project as an opportunity to create <br /> something
					unique and special: challenges excite us. Always.
				</p>
			</div>
		</div>
	);
}
