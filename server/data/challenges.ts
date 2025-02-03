import "server-only"

export interface Challenge {
	id: string
	title: string
	description: string
	points: number
	progress: {
		current: number
		total: number
	}
	deadline: string // ISO date string
}

const dummyChallenges: Challenge[] = [
	{
		id: "1",
		title: "Learn 5 Animal Words",
		description:
			"Watch videos about pets and farm animals to learn their names in Spanish",
		points: 100,
		progress: {
			current: 2,
			total: 5
		},
		deadline: new Date(Date.now() + 23 * 3600 * 1000).toISOString() // 23 hours from now
	},
	{
		id: "2",
		title: "Food Words Challenge",
		description: "Watch cooking videos to learn names of fruits and vegetables",
		points: 150,
		progress: {
			current: 0,
			total: 8
		},
		deadline: new Date(Date.now() + 47 * 3600 * 1000).toISOString() // 47 hours from now
	},
	{
		id: "3",
		title: "Colors & Shapes",
		description: "Learn colors and shapes by watching art and drawing videos",
		points: 100,
		progress: {
			current: 4,
			total: 6
		},
		deadline: new Date(Date.now() + 12 * 3600 * 1000).toISOString() // 12 hours from now
	},
	{
		id: "4",
		title: "Body Parts Quest",
		description: "Watch dance and exercise videos to learn parts of the body",
		points: 120,
		progress: {
			current: 1,
			total: 7
		},
		deadline: new Date(Date.now() + 36 * 3600 * 1000).toISOString() // 36 hours from now
	},
	{
		id: "5",
		title: "Weather Words",
		description: "Learn weather-related words from outdoor activity videos",
		points: 80,
		progress: {
			current: 0,
			total: 4
		},
		deadline: new Date(Date.now() + 18 * 3600 * 1000).toISOString() // 18 hours from now
	},
	{
		id: "6",
		title: "Clothing Words",
		description:
			"Watch fashion and dress-up videos to learn clothing vocabulary",
		points: 90,
		progress: {
			current: 3,
			total: 6
		},
		deadline: new Date(Date.now() + 28 * 3600 * 1000).toISOString() // 28 hours from now
	}
]

export async function fetchChallenges() {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return dummyChallenges
}
