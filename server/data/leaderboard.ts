"use server"
import "server-only"
import type { UserStats } from "./types" // We'll create this shared type

export interface LeaderboardEntry {
	id: string
	name: string
	avatarUrl: string
	level: number
	points: number
	rank: number
	streak: number
}

const dummyLeaderboard: LeaderboardEntry[] = [
	{
		id: "1",
		name: "Emma Thompson",
		avatarUrl: "https://picsum.photos/seed/emma/200",
		level: 15,
		points: 2850,
		rank: 1,
		streak: 12
	},
	{
		id: "2",
		name: "Liam Chen",
		avatarUrl: "https://picsum.photos/seed/liam/200",
		level: 14,
		points: 2720,
		rank: 2,
		streak: 8
	},
	{
		id: "3",
		name: "Sofia Rodriguez",
		avatarUrl: "https://picsum.photos/seed/sofia/200",
		level: 13,
		points: 2680,
		rank: 3,
		streak: 15
	},
	{
		id: "4",
		name: "Lucas Kim",
		avatarUrl: "https://picsum.photos/seed/lucas/200",
		level: 12,
		points: 2450,
		rank: 4,
		streak: 6
	},
	{
		id: "5",
		name: "Olivia Patel",
		avatarUrl: "https://picsum.photos/seed/olivia/200",
		level: 12,
		points: 2380,
		rank: 5,
		streak: 9
	},
	{
		id: "6",
		name: "Noah Williams",
		avatarUrl: "https://picsum.photos/seed/noah/200",
		level: 11,
		points: 2290,
		rank: 6,
		streak: 4
	},
	{
		id: "7",
		name: "Ava Johnson",
		avatarUrl: "https://picsum.photos/seed/ava/200",
		level: 11,
		points: 2180,
		rank: 7,
		streak: 7
	},
	{
		id: "8",
		name: "Ethan Brown",
		avatarUrl: "https://picsum.photos/seed/ethan/200",
		level: 10,
		points: 2050,
		rank: 8,
		streak: 5
	}
]

export async function fetchLeaderboard(): Promise<LeaderboardEntry[]> {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return dummyLeaderboard
}

export interface LeaderboardEntryDetails extends LeaderboardEntry {
	stats: UserStats
	recentAchievements: {
		id: string
		name: string
		description: string
		icon: string
		dateEarned: string
	}[]
}

export async function fetchLeaderboardEntryDetails(
	id: string
): Promise<LeaderboardEntryDetails> {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000))

	// Find the base entry
	const baseEntry = dummyLeaderboard.find((entry) => entry.id === id)
	if (!baseEntry) {
		throw new Error("Entry not found")
	}

	// Return extended details without weeklyProgress
	return {
		...baseEntry,
		stats: {
			wordsLearned: 450,
			challengesCompleted: 32,
			minutesWatched: 840,
			daysStreak: baseEntry.streak
		},
		recentAchievements: [
			{
				id: "1",
				name: "Vocabulary Master",
				description: "Learned 450 words",
				icon: "book",
				dateEarned: "2024-03-10"
			},
			{
				id: "2",
				name: "Challenge Champion",
				description: "Completed 30 challenges",
				icon: "trophy",
				dateEarned: "2024-03-08"
			},
			{
				id: "3",
				name: "Learning Explorer",
				description: "Watched 14 hours of content",
				icon: "time",
				dateEarned: "2024-03-05"
			}
		]
	}
}
