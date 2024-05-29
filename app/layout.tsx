import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Kromin | Data Driven Agency",
	description: "Kromin | Data Driven Agency",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
