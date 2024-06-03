"use client";
// import { useEffect } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// export default function Sticky() {
// 	const cursorSize = 40;
// 	const mouse = {
// 		x: useMotionValue(0),
// 		y: useMotionValue(0),
// 	};

// 	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
// 	const smoothMouse = {
// 		x: useSpring(mouse.x, smoothOptions),
// 		y: useSpring(mouse.y, smoothOptions),
// 	};

// 	const manageMouseMove = (e: any) => {
// 		const { clientX, clientY } = e;
// 		mouse.x.set(clientX - cursorSize / 2);
// 		mouse.y.set(clientY - cursorSize / 2);
// 	};
// 	useEffect(() => {
// 		window.addEventListener("mousemove", manageMouseMove);
// 		return () => {
// 			window.removeEventListener("mousemove", manageMouseMove);
// 		};
// 	});

// 	return (
// 		<motion.div
// 			className="w-[30px] h-[30px] fixed rounded-full bg-[#ae48f657] pointer-events-none z-50 sm:hidden xm:hidden flex"
// 			style={{
// 				left: smoothMouse.x,
// 				top: smoothMouse.y,
// 			}}
// 		/>
// 	);
// }

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor({ children }: { children: React.ReactNode }) {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [cursorVariant, setCursorVariant] = useState("default");

	useEffect(() => {
		const mouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	const variants = {
		default: {
			x: mousePosition.x - 16,
			y: mousePosition.y - 16,
		},
		text: {
			height: 150,
			width: 150,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			backgroundColor: "yellow",
			mixBlendMode: "difference",
		},
	};

	const textEnter = () => setCursorVariant("text");
	const textLeave = () => setCursorVariant("default");

	return (
		<>
			<motion.div
				className="bg-[#111] h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none"
				// @ts-ignore
				variants={variants}
				animate={cursorVariant}
			/>
			{React.Children.map(children, (child) =>
				// @ts-ignore
				React.cloneElement(child, {
					onMouseEnter: textEnter,
					onMouseLeave: textLeave,
				}),
			)}
		</>
	);
}
