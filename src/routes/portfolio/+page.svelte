<script lang="ts">
	import PortfolioSection from './PortfolioSection.svelte';
	let betssonDescription: string[] = [
		'Migrating of large-scale applications from Angular to StencilJS micro-frontends, such as the Horse Racing micro-frontend',
		'Development of design system components using Angular and StencilJS for increased re-usability',
		'Developed a Node.js script which analyses the bundle stats of a micro-frontend and generates a JSON file including the bundle size for the micro-frontend’s components upon building (i.e. after runnning npm run build). A warning is issued when a component’s build size increases by >5% from the previous build.',
		'Designing and developing internal error & maintenance page UX together with designers',
		'Contribution in the re-branding of Betsson brands, such as NordicBet, Oranjecasino and NordicAutomaten',
		'Development of the Design System Component Library and setup in Storybook'
	];
	let technicalSkills = [
		'JavaScript, TypeScript, HTML, CSS, SCSS, Java, Python, C, C++',
		'React.js, Next.js, Svelte, Angular, StencilJS, Node.js, Neo4j, Jest, Storybook, Puppeteer, Cucumber, Git, Docker, Bash, LaTeX, NeoVim.'
	];
</script>

<div class="portfolio-container">
	<PortfolioSection
		sectionTitle="Work Experience"
		jobTitle="Software Engineer Intern at Betsson Group"
		date="May 2022 - Present"
		description={betssonDescription}
	/>
	<PortfolioSection
		sectionTitle={undefined}
		jobTitle="InfoSec Intern at Gaming Innovation Group"
		date="July 2021 - September 2021"
		description={undefined}
	/>
	<PortfolioSection
		sectionTitle="Education"
		jobTitle="B.Sc. (Hons.) Computer Science - University of Malta"
		date="October 2020 - June 2023"
		description={undefined}
	/>
	<PortfolioSection
		sectionTitle="Technical Skills"
		jobTitle={undefined}
		date={undefined}
		description={technicalSkills}
	/>
</div>

<style>
	.portfolio-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
