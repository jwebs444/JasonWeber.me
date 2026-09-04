export type FeaturedProject = {
	index: string;
	title: string;
	group: ProjectGroupId;
	category: string;
	summary: string;
	href: string;
	linkLabel: string;
	technologies: string[];
	highlights: string[];
	proof: string;
	image?: { src: string; alt: string; caption: string };
};

export type ProjectGroupId = 'public-systems' | 'software-builds';

export const projectGroups: Array<{
	id: ProjectGroupId;
	label: string;
	description: string;
}> = [
	{
		id: 'public-systems',
		label: 'Connected public systems',
		description:
			'Three independent public projects grown from field experience, careful research, and the practical questions that come up on the road.'
	},
	{
		id: 'software-builds',
		label: 'Focused software builds',
		description:
			'A weather-comparison API and a command-line adventure, with their logic, tests, and source code open to inspect.'
	}
];

export const featuredProjects: FeaturedProject[] = [
	{
		index: '01',
		title: 'Roost Atlas',
		group: 'public-systems',
		category: 'Camping atlas · Public-lands research',
		summary: 'A live map for finding free, dispersed, and developed camping on public land.',
		href: 'https://roostatlas.com',
		linkLabel: 'Open live site',
		technologies: ['JavaScript', 'Leaflet', 'OpenStreetMap', 'Marker clustering', 'Responsive UI'],
		highlights: [
			'Searches and filters camping by cost, type, vehicle access, land agency, and verification.',
			'Brings together map browsing, place search, clustered markers, and detailed records.',
			'Shows access, amenities, and source information where those facts are available.'
		],
		proof: 'Live map · researched public records · field-informed planning',
		image: {
			src: '/images/projects/atlas-interface-20260904.png',
			alt: 'Roost Atlas camping filters and site list beside a map with clustered locations',
			caption:
				'Cost, vehicle access, agency, and amenities narrow the camping search alongside a map and site list. Public interface, September 4, 2026.'
		}
	},
	{
		index: '02',
		title: 'PerchPoints',
		group: 'public-systems',
		category: 'Photo atlas · Road-trip planning',
		summary:
			'A map-led atlas of 429 photographs at 100 reviewed PerchPoints, connected through seven daylight-aware road trips.',
		href: 'https://perchpoints.com',
		linkLabel: 'Open live site',
		technologies: ['SvelteKit', 'TypeScript', 'Leaflet', 'OpenStreetMap', 'Cloudflare'],
		highlights: [
			'Distinguishes exact, approximate, and area-only pins so travelers can judge how precisely a place is mapped.',
			'Estimates road-trip driving time using speed limits and road geometry, alongside time planned for outings.',
			'Connects seven road trips from 4 to 65 days with outing estimates and researched camping options.'
		],
		proof: '429 photographs · 100 reviewed pins · 7 Flyways'
	},
	{
		index: '03',
		title: 'Mr. Crowmeister',
		group: 'public-systems',
		category: 'Publishing platform · Field media',
		summary:
			'A field journal for original video, sound, photography, writing, maps, and practical guides.',
		href: 'https://mrcrowmeister.com',
		linkLabel: 'Open live site',
		technologies: ['React', 'TypeScript', 'Cloudflare', 'Content pipeline', 'Responsive media'],
		highlights: [
			'Publishes video, field recordings, photography, essays, maps, and practical guides in one place.',
			'Organizes original media by subject and journey, with layouts that adapt to phones and larger screens.',
			'Connects field notes and evidence with longer stories from the same journeys.'
		],
		proof: 'Original field media · essays and guides · active publication'
	},
	{
		index: '04',
		title: 'Canyon Rain',
		group: 'software-builds',
		category: 'Forecast API · Data integration',
		summary:
			'A FastAPI service that compares National Weather Service and OpenWeather precipitation forecasts for a requested coordinate.',
		href: 'https://github.com/jwebs444/Canyon_rain',
		linkLabel: 'View repository',
		technologies: ['Python', 'FastAPI', 'NWS API', 'OpenWeather', 'Pytest'],
		highlights: [
			'Normalizes hourly and three-hour forecasts into comparable windows.',
			'Returns clear validation and provider errors when upstream forecast data is unavailable.',
			'Compares both providers in one response so their precipitation forecasts can be read together.'
		],
		proof: 'Documented API · forecast comparison · error handling'
	},
	{
		index: '05',
		title: 'DungeonCrawler',
		group: 'software-builds',
		category: 'Game systems · Object-oriented Python',
		summary:
			'A turn-based command-line adventure built around randomized exploration, profession-specific attributes, combat, loot, and resource management.',
		href: 'https://github.com/jwebs444/DungeonCrawler',
		linkLabel: 'View repository',
		technologies: ['Python', 'OOP', 'CLI', 'Pytest', 'GitHub Actions'],
		highlights: [
			'Models parties, enemies, rooms, health, movement, supplies, and profession bonuses.',
			'Separates game state from terminal input and output for deterministic testing.',
			'Validates player choices and closes edge cases around resting, exiting, and exploration.'
		],
		proof: 'Playable in the terminal · testable game logic · no runtime dependencies'
	}
];
