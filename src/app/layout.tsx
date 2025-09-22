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
			<head>
				{/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-W2RLCPT5');`,
					}}
				/>
				{/* End Google Tag Manager */}
			</head>
			<body className={`${lato.className} ${raleway.variable} ${lato.variable} antialiased`}>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-W2RLCPT5"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				{/* End Google Tag Manager (noscript) */}

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
