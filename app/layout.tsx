import "@styles/globals.css";
import type { Metadata } from "next";
import { Footer, RegisterModal, LoginModal } from "@components";
import ToasterProvider from "@provider/ToastProvide";

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
			<body>
				<ToasterProvider />
				<RegisterModal />
				<LoginModal />
				{children}
				<Footer />
			</body>
		</html>
	);
}
