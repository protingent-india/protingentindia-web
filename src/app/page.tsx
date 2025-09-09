import {
	BlogSection,
	ComprehensiveSection,
	HeroSection,
	HomeIntro,
	IndustriesSlider,
	TalkToExpert
} from "@/components";

// ---------------------------------------------------------------------

export default function Home() {
	return (
		<div id="home page" className="bg-white w-full flex flex-col items-center gap-16 lg:gap-32 pb-20">
			<div>
				<HeroSection />
				<HomeIntro />
			</div>
			<ComprehensiveSection />
			<IndustriesSlider />
			<TalkToExpert />
			<BlogSection />
		</div>
	);
}
