"use client";
import { CTA, Footer, Hero, Portfolio, Services } from "@components";
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
			<Sticky />
			<Hero />
			<Services />
			<Portfolio />
			<CTA />
			<Footer />
		</>
	);
}
