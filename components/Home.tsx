"use client";
import {
	CTA,
	Experience,
	Footer,
	Glance,
	Hero,
	NewsLetter,
	Partner,
	Result,
	Services,
} from "@components";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Sticky } from "@animation";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<>
			<div className="sm:hidden xm:hidden flex">
				<Sticky />
			</div>
			<div className="">
				<Hero />
				{/* <div className="padding-x">
					<Experience />
				</div>
				<Partner />
				<Glance />
				<Services />
				<div className="padding-x">
					<Result />
				</div>
				<NewsLetter />
				*/}
				<div className="">
					<CTA />
				</div>
			</div>
		</>
	);
}
