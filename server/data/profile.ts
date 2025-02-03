import "server-only"

export interface UserProfile {
	id: string
	name: string
	avatarUrl: string
	bio: string
	level: number
	stars: number
	starsToNextLevel: number
	stats: {
		challengesCompleted: number
		wordsLearned: number
		daysStreak: number
		minutesWatched: number
	}
	interests: string[]
	achievements: {
		id: string
		name: string
		description: string
		icon: string
		dateEarned: string
	}[]
}

const dummyProfile: UserProfile = {
	id: "1",
	name: "Alex Chen",
	avatarUrl: "https://picsum.photos/seed/alex/200",
	bio: "I love learning new languages! Currently focused on Spanish. 🌟",
	level: 12,
	stars: 2450,
	starsToNextLevel: 550,
	stats: {
		challengesCompleted: 45,
		wordsLearned: 230,
		daysStreak: 7,
		minutesWatched: 840
	},
	interests: ["Animals", "Sports", "Music", "Food"],
	achievements: [
		{
			id: "1",
			name: "First Steps",
			description: "Complete your first challenge",
			icon: "trophy",
			dateEarned: "2024-02-15"
		},
		{
			id: "2",
			name: "Word Collector",
			description: "Learn 200 words",
			icon: "book",
			dateEarned: "2024-03-01"
		},
		{
			id: "3",
			name: "Week Warrior",
			description: "Maintain a 7-day streak",
			icon: "flame",
			dateEarned: "2024-03-10"
		}
	]
}

export async function fetchUserProfile() {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return dummyProfile
}
