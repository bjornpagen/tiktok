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
	expiry: TimeBasedExpiry | ParticipantBasedExpiry
	difficulty: string
}

export interface TimeBasedExpiry {
	type: "time"
	deadline: string // ISO date string
}

export interface ParticipantBasedExpiry {
	type: "participants"
	maxClaims: number
	currentClaims: number
}

interface Word {
	word: string
	learned: boolean
	lastPracticed?: string
}

interface Peer {
	id: string
	name: string
	progress: number
	avatar?: string
}

interface ChallengeDetails extends Challenge {
	words: Word[]
	peers: Peer[]
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
		expiry: {
			type: "time",
			deadline: new Date(Date.now() + 53 * 3600 * 1000).toISOString()
		},
		difficulty: "Beginner"
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
		expiry: {
			type: "participants",
			maxClaims: 50,
			currentClaims: 38
		},
		difficulty: "Intermediate"
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
		expiry: {
			type: "time",
			deadline: new Date(Date.now() + 16.5 * 3600 * 1000).toISOString()
		},
		difficulty: "Advanced"
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
		expiry: {
			type: "time",
			deadline: new Date(Date.now() + 80 * 3600 * 1000).toISOString()
		},
		difficulty: "Intermediate"
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
		expiry: {
			type: "participants",
			maxClaims: 30,
			currentClaims: 27
		},
		difficulty: "Beginner"
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
		expiry: {
			type: "time",
			deadline: new Date(Date.now() + 28 * 3600 * 1000).toISOString()
		},
		difficulty: "Intermediate"
	}
]

export async function fetchChallenges() {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return dummyChallenges
}

export async function fetchChallengeDetails(
	id: string
): Promise<ChallengeDetails> {
	// This would normally fetch from an API
	// Mocked data for now
	return {
		id,
		title: "Master Basic Greetings",
		description:
			"Learn and practice essential greeting phrases to start conversations confidently.",
		points: 100,
		progress: {
			current: 3,
			total: 5
		},
		expiry: {
			type: "time",
			deadline: new Date(Date.now() + 172800000).toISOString() // 48 hours from now
		},
		difficulty: "Beginner",
		words: [
			{ word: "Hello", learned: true, lastPracticed: "2024-03-10" },
			{ word: "Goodbye", learned: true, lastPracticed: "2024-03-09" },
			{ word: "Good morning", learned: true, lastPracticed: "2024-03-08" },
			{ word: "Good evening", learned: false },
			{ word: "See you later", learned: false }
		],
		peers: [
			{ id: "1", name: "Emma", progress: 80 },
			{ id: "2", name: "Liam", progress: 60 },
			{ id: "3", name: "Olivia", progress: 40 },
			{ id: "4", name: "Noah", progress: 20 }
		]
	}
}
