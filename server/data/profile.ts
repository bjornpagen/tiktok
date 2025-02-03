import "server-only"
import type { UserStats, LanguageLevel } from "./types"

export interface UserProfile {
	id: string
	name: string
	avatarUrl: string
	bio: string
	stars: number
	stats: UserStats
	interests: string[]
	achievements: {
		id: string
		name: string
		description: string
		icon: string
		dateEarned: string
	}[]
	currentLanguage: string
	languageLevels: LanguageLevel[]
}

const dummyProfile: UserProfile = {
	id: "1",
	name: "Alex Chen",
	avatarUrl: "https://picsum.photos/seed/alex/200",
	bio: "I love learning new languages! Currently focused on Spanish. 🌟",
	stars: 2450,
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
	],
	currentLanguage: "es",
	languageLevels: [
		{ code: "es", name: "Spanish", level: 12, emoji: "🇪🇸" },
		{ code: "fr", name: "French", level: 5, emoji: "🇫🇷" },
		{ code: "de", name: "German", level: 3, emoji: "🇩🇪" },
		{ code: "it", name: "Italian", level: 1, emoji: "🇮🇹" },
		{ code: "pt", name: "Portuguese", level: 1, emoji: "🇵🇹" }
	]
}

export async function fetchUserProfile() {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return dummyProfile
}

export async function updateUserLanguage(languageCode: string) {
	"use server"
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 500))
	// In a real app, this would update the database
	return { success: true }
}
