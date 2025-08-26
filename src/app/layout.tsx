import type { Metadata } from "next";
import { Lato } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";

// -------------------------------------------------------------------------

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"]
});

// -------------------------------------------------------------------------

export const metadata: Metadata = {
	title: "Protingent India",
	description: "Talent sourcing",
};

// -------------------------------------------------------------------------

export const Header = dynamic(() => import('@/components/header'), {
	ssr: true
});

// -------------------------------------------------------------------------

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lato.className} antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
