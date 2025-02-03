export interface UserStats {
	challengesCompleted: number
	wordsLearned: number
	minutesWatched: number
	daysStreak: number
}

export interface LanguageLevel {
	code: string
	name: string
	level: number
	emoji: string // Flag emoji for the language
}
