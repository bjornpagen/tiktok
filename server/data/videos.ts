import "server-only"

// Dummy data moved to server component
const dummyVideos = [
	{
		id: "1",
		title: "Mountain Landscapes",
		thumbnailUrl: "https://picsum.photos/seed/mountains/640/480"
	},
	{
		id: "2",
		title: "Urban Architecture",
		thumbnailUrl: "https://picsum.photos/seed/city/640/480"
	},
	{
		id: "3",
		title: "Ocean Waves",
		thumbnailUrl: "https://picsum.photos/seed/ocean/640/480"
	},
	{
		id: "4",
		title: "Desert Sunset",
		thumbnailUrl: "https://picsum.photos/seed/desert/640/480"
	},
	{
		id: "5",
		title: "Forest Adventures",
		thumbnailUrl: "https://picsum.photos/seed/forest/640/480"
	},
	{
		id: "6",
		title: "Wildlife Safari",
		thumbnailUrl: "https://picsum.photos/seed/wildlife/640/480"
	},
	{
		id: "7",
		title: "Northern Lights",
		thumbnailUrl: "https://picsum.photos/seed/aurora/640/480"
	},
	{
		id: "8",
		title: "Tropical Paradise",
		thumbnailUrl: "https://picsum.photos/seed/tropical/640/480"
	},
	{
		id: "9",
		title: "Ancient Ruins",
		thumbnailUrl: "https://picsum.photos/seed/ruins/640/480"
	},
	{
		id: "10",
		title: "Space Exploration",
		thumbnailUrl: "https://picsum.photos/seed/space/640/480"
	},
	{
		id: "11",
		title: "Underwater World",
		thumbnailUrl: "https://picsum.photos/seed/underwater/640/480"
	},
	{
		id: "12",
		title: "Winter Wonderland",
		thumbnailUrl: "https://picsum.photos/seed/winter/640/480"
	}
]

export async function fetchInitialVideos() {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return dummyVideos
}
