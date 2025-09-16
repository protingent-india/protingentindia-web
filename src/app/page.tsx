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
		<div id="home page" className="bg-white w-full flex flex-col items-center pb-20">
			<div className="w-full" >
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
