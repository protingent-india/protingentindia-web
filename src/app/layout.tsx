import type { Metadata } from "next";
import { Lato } from "next/font/google";
import dynamicComponent from "next/dynamic";
import StoreProvider from "./StoreProvider";
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

export const Header = dynamicComponent(() => import('@/components/header'), {
	ssr: true
});

export const Footer = dynamicComponent(() => import('@/components/footer'), {
	ssr: true
});

export const ScrollToTop = dynamicComponent(() => import('@/components/scrollToTop'), {
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
			<body className={`${lato.className} antialiased`}>
				<ScrollToTop>
					<StoreProvider>
						<Header />
						{children}
						<Footer />
					</StoreProvider>
				</ScrollToTop>
			</body>
		</html>
	);
}
