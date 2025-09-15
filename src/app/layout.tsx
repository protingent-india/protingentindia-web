import type { Metadata } from "next";
import { Lato, Raleway } from "next/font/google";
import dynamicComponent from "next/dynamic";
import StoreProvider from "./StoreProvider";
import AOSWrapper from "@/components/AOSWrapper";
import "./globals.css";

// -------------------------------------------------------------------------

const lato = Lato({
	subsets: ["latin"],
	weight: ["100", "300", "400", "700", "900"],
	variable: "--font-lato"
});

const raleway = Raleway({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-raleway"
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
			<body className={`${lato.className} ${raleway.variable} ${lato.variable} antialiased`}>
				<AOSWrapper>
					<ScrollToTop>
						<StoreProvider>
							<Header />
							{children}
							<Footer />
						</StoreProvider>
					</ScrollToTop>
				</AOSWrapper>
			</body>
		</html>
	);
}
