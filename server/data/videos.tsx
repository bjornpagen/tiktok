import "server-only"

// Dummy data moved to server component
const dummyVideos = [
	{
		id: "1",
		title: "A Day at the Zoo",
		thumbnailUrl: "https://placeimg.com/640/480/animals"
	},
	{
		id: "2",
		title: "Space Adventure",
		thumbnailUrl: "https://placeimg.com/640/480/tech"
	},
	{
		id: "3",
		title: "Magic and Fairy Tales",
		thumbnailUrl: "https://placeimg.com/640/480/fantasy"
	}
]

export async function fetchInitialVideos() {
	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return dummyVideos
}
