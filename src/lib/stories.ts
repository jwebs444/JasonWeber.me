import { featuredProjects } from './projects';

export type WorkStory = {
	slug: string;
	category: string;
	client: string;
	title: string;
	summary: string;
	role: string;
	proof: string;
	sections: { title: string; body: string }[];
	image?: { src: string; alt: string; caption: string };
	externalUrl?: string;
	steps?: string[];
};

const atlas = featuredProjects[0];

export const workStories: WorkStory[] = [
	{
		slug: 'roost-atlas',
		category: 'Independent product',
		client: 'Roost Atlas',
		title: 'Making public-land camping easier to explore.',
		summary:
			'A working map that brings camping research, practical filters, and source information into one place.',
		role: 'Independent software builder',
		proof: 'A live, searchable camping atlas',
		image: atlas.image,
		externalUrl: atlas.href,
		sections: [
			{
				title: 'The problem',
				body: 'Finding a place to camp involves more than finding a point on a map. Cost, vehicle access, land agency, amenities, and the quality of the available information all affect whether a location fits a trip.'
			},
			{
				title: 'The product',
				body: 'Roost Atlas brings map browsing, place search, clustered markers, and detailed camping records together. Visitors can narrow locations by cost, camping type, vehicle access, land agency, and verification.'
			},
			{
				title: 'The decisions in the interface',
				body: 'Filters sit alongside the map and site list, so visitors can compare the geography with the practical details. Records show access, amenities, and sources where those facts are available. Verification is itself a filter, giving the quality of the research a visible place in the product.'
			},
			{
				title: 'The result',
				body: 'A public tool for exploring free, dispersed, and developed camping. The live interface provides a direct way to inspect the work: search a place, change the filters, and examine an individual record.'
			}
		]
	},
	{
		slug: 'legacy-data-recovery',
		category: 'Systems & recovery',
		client: 'Upstart LP',
		title: 'Recovering the data a business still depended on.',
		summary:
			'Recovered an active data set from a failing Windows 7 system for an investment partnership.',
		role: 'Independent Technology Contractor · 2021–2024',
		proof: 'Data recovered, legacy environment virtualized, and data migrated',
		steps: [
			'Back up the data',
			'Restore access',
			'Recreate the environment',
			'Protect the VM',
			'Migrate the data'
		],
		sections: [
			{
				title: 'The situation',
				body: 'A multi-million-dollar investment partnership had an active data set on a failing Windows 7 system. The operating system was old, but the information remained part of the business’s working environment.'
			},
			{
				title: 'First, protect the data',
				body: 'I was engaged as an independent technology contractor to recover the active legacy data. My first step was to back it up so that a hardware failure would not put the only copy at risk. I then moved it somewhere it could be accessed and used.'
			},
			{
				title: 'Restore the way it was used',
				body: 'Having the files was only part of the recovery. The business needed to use the data as it had before. I recreated the legacy environment in a virtual machine (VM), allowing the existing software and data to work together without depending on the failing physical system.'
			},
			{
				title: 'Make the recovery maintainable',
				body: 'I backed up the VM and put updating checkpoints in place. This gave the recovered environment a way to return to an earlier state as work continued.'
			},
			{
				title: 'Move beyond the legacy environment',
				body: 'The final step was to phase out use of the VM and move the legacy data to a new format. The work progressed from immediate data protection, to restored usability, to a transition away from the old environment.'
			}
		]
	},
	{
		slug: 'technology-in-operations',
		category: 'Leadership in practice',
		client: 'Kresl Power',
		title: 'Keeping orders moving through a disruptive ERP rollout.',
		summary:
			'Protected hundreds of thousands of dollars in orders from potential cancellation by resolving JD Edwards workflow problems and keeping New Equipment operations moving.',
		role: 'Technology & Operations Manager · 2024–Present',
		proof: 'Orders protected, procedures documented, and employees trained',
		steps: ['Keep work moving', 'Investigate dependencies', 'Unblock orders', 'Document & train'],
		sections: [
			{
				title: 'The business problem',
				body: 'A disruptive JD Edwards (JDE) rollout created workflow bottlenecks that nearly halted New Equipment operations at Kresl Power. Orders were at risk of cancellation, getting stuck on the shipping dock, or creating accounting problems. An enterprise resource planning (ERP) system connects those parts of the business, so an unresolved dependency can stop work far beyond a single screen.'
			},
			{
				title: 'Own the operation and investigate the system',
				body: 'Reporting directly to the president/CEO, I own New Equipment operations, including quoting, order entry, inventory, bill of materials lookup, workflow changes, documentation, and employee support. I used temporary paper tickets to keep work moving while investigating how JDE work orders, sales orders, and configured items related to one another. Understanding those dependencies and statuses let me troubleshoot stuck orders and determine how to advance them.'
			},
			{
				title: 'Turn the findings into a shared way of working',
				body: 'I wrote new operating procedures and trained two New Equipment employees and the president/CEO, plus five other employees on procedures for their own functions. I also caught and corrected hundreds of errors before orders left the building.'
			},
			{
				title: 'Close a long-standing information gap',
				body: 'Kresl had pursued a parts-traceability gap for over a year. During a Harrington site visit, I gained access to previously unavailable JDE processes and learned to connect hoist serial numbers to parts and suppliers. I represented Kresl’s operational and technology needs directly with manufacturer leadership.'
			},
			{
				title: 'The result',
				body: 'New Equipment operations continued through the disruption. Hundreds of thousands of dollars in orders were protected from potential cancellation, with clearer procedures, trained employees, and errors corrected before shipment.'
			}
		]
	}
];

export function findWorkStory(slug: string) {
	return workStories.find((story) => story.slug === slug);
}

export const selectedWork = [
	{
		slug: 'technology-in-operations',
		client: 'Kresl Power',
		title: 'Keeping critical orders moving.',
		summary:
			'Protected hundreds of thousands of dollars in orders from potential cancellation by resolving system and workflow bottlenecks.'
	},
	{
		slug: 'legacy-data-recovery',
		client: 'Upstart LP',
		title: 'Bringing legacy data back to work.',
		summary:
			'Backed up at-risk data, restored its use through a virtual machine, and migrated it to a new format.'
	},
	{
		slug: 'roost-atlas',
		client: 'Roost Atlas',
		title: 'Making camping research useful.',
		summary:
			'Built a live camping atlas that brings map browsing, practical filters, and source information together.'
	}
];
