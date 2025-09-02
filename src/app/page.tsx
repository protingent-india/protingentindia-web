import {
	ComprehensiveSection,
	HeroSection,
	HomeIntro
} from "@/components";

// ---------------------------------------------------------------------

export default function Home() {
	return (
		<div className="bg-white w-full flex flex-col items-center gap-32 pb-20">
			<HeroSection />
			<HomeIntro />
			<ComprehensiveSection />
		</div>
	);
}
