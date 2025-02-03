import "server-only"

// Dummy data moved to server component
const dummyVideos = [
	{
		id: "1",
		title: "Mountain Adventure",
		description:
			"Learn words about nature and hiking while exploring beautiful mountains!",
		thumbnailUrl: "https://picsum.photos/seed/mountains/640/480"
	},
	{
		id: "2",
		title: "City Explorer",
		description:
			"Discover vocabulary about buildings, transportation, and city life!",
		thumbnailUrl: "https://picsum.photos/seed/city/640/480"
	},
	{
		id: "3",
		title: "Ocean Friends",
		description: "Meet sea creatures and learn words about marine life!",
		thumbnailUrl: "https://picsum.photos/seed/ocean/640/480"
	},
	{
		id: "4",
		title: "Desert Discovery",
		description: "Explore desert animals and learn about their unique habitat!",
		thumbnailUrl: "https://picsum.photos/seed/desert/640/480"
	},
	{
		id: "5",
		title: "Forest Friends",
		description: "Join woodland creatures and learn about forest life!",
		thumbnailUrl: "https://picsum.photos/seed/forest/640/480"
	},
	{
		id: "6",
		title: "Safari Adventure",
		description: "Meet African animals and learn exciting wildlife words!",
		thumbnailUrl: "https://picsum.photos/seed/wildlife/640/480"
	},
	{
		id: "7",
		title: "Arctic Wonders",
		description: "Discover polar animals and learn about life in the cold!",
		thumbnailUrl: "https://picsum.photos/seed/aurora/640/480"
	},
	{
		id: "8",
		title: "Island Fun",
		description:
			"Learn beach words and tropical vocabulary with island friends!",
		thumbnailUrl: "https://picsum.photos/seed/tropical/640/480"
	},
	{
		id: "9",
		title: "Time Travel",
		description: "Explore ancient places and learn history words!",
		thumbnailUrl: "https://picsum.photos/seed/ruins/640/480"
	},
	{
		id: "10",
		title: "Space Journey",
		description: "Blast off to learn astronomy and space exploration words!",
		thumbnailUrl: "https://picsum.photos/seed/space/640/480"
	},
	{
		id: "11",
		title: "Deep Sea Tales",
		description: "Dive deep to learn about mysterious ocean creatures!",
		thumbnailUrl: "https://picsum.photos/seed/underwater/640/480"
	},
	{
		id: "12",
		title: "Snow Day",
		description: "Learn winter words while playing in the snow!",
		thumbnailUrl: "https://picsum.photos/seed/winter/640/480"
	}
]

export async function fetchInitialVideos() {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return dummyVideos
}
