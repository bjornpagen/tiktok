"use server"

import "server-only"

export interface SubInterest {
	id: string
	name: string
	selected: boolean
}

export interface Interest {
	id: string
	name: string
	icon: string // Ionicons name
	selected: boolean
	subInterests: SubInterest[]
}

// Initial interests data with sub-categories
const availableInterests: Interest[] = [
	{
		id: "1",
		name: "Animals",
		icon: "paw",
		selected: false,
		subInterests: [
			{ id: "1-1", name: "Dogs", selected: false },
			{ id: "1-2", name: "Cats", selected: false },
			{ id: "1-3", name: "Marine Life", selected: false },
			{ id: "1-4", name: "Birds", selected: false },
			{ id: "1-5", name: "Farm Animals", selected: false },
			{ id: "1-6", name: "Reptiles", selected: false },
			{ id: "1-7", name: "Insects", selected: false },
			{ id: "1-8", name: "Zoo Animals", selected: false },
			{ id: "1-9", name: "Endangered Species", selected: false },
			{ id: "1-10", name: "Animal Behavior", selected: false },
			{ id: "1-11", name: "Pets", selected: false },
			{ id: "1-12", name: "Wildlife", selected: false }
		]
	},
	{
		id: "2",
		name: "Sports",
		icon: "football",
		selected: false,
		subInterests: [
			{ id: "2-1", name: "Soccer", selected: false },
			{ id: "2-2", name: "Basketball", selected: false },
			{ id: "2-3", name: "Tennis", selected: false },
			{ id: "2-4", name: "Swimming", selected: false },
			{ id: "2-5", name: "Baseball", selected: false },
			{ id: "2-6", name: "Volleyball", selected: false },
			{ id: "2-7", name: "Running", selected: false },
			{ id: "2-8", name: "Gymnastics", selected: false },
			{ id: "2-9", name: "Martial Arts", selected: false },
			{ id: "2-10", name: "Dance", selected: false },
			{ id: "2-11", name: "Skating", selected: false },
			{ id: "2-12", name: "Team Sports", selected: false }
		]
	},
	{
		id: "3",
		name: "Music",
		icon: "musical-notes",
		selected: false,
		subInterests: [
			{ id: "3-1", name: "Pop", selected: false },
			{ id: "3-2", name: "Classical", selected: false },
			{ id: "3-3", name: "Rock", selected: false },
			{ id: "3-4", name: "Jazz", selected: false },
			{ id: "3-5", name: "Folk Music", selected: false }
		]
	},
	{
		id: "4",
		name: "Food",
		icon: "restaurant",
		selected: false,
		subInterests: [
			{ id: "4-1", name: "Cooking", selected: false },
			{ id: "4-2", name: "Baking", selected: false },
			{ id: "4-3", name: "Healthy Eating", selected: false },
			{ id: "4-4", name: "World Cuisine", selected: false },
			{ id: "4-5", name: "Snacks", selected: false }
		]
	},
	{
		id: "5",
		name: "Science",
		icon: "flask",
		selected: false,
		subInterests: [
			{ id: "5-1", name: "Space", selected: false },
			{ id: "5-2", name: "Chemistry", selected: false },
			{ id: "5-3", name: "Biology", selected: false },
			{ id: "5-4", name: "Experiments", selected: false },
			{ id: "5-5", name: "Nature", selected: false }
		]
	},
	{
		id: "6",
		name: "Arts & Crafts",
		icon: "brush",
		selected: false,
		subInterests: [
			{ id: "6-1", name: "Drawing", selected: false },
			{ id: "6-2", name: "Painting", selected: false },
			{ id: "6-3", name: "Crafting", selected: false },
			{ id: "6-4", name: "Origami", selected: false },
			{ id: "6-5", name: "Sculpture", selected: false }
		]
	},
	{
		id: "7",
		name: "Technology",
		icon: "hardware-chip",
		selected: false,
		subInterests: [
			{ id: "7-1", name: "Coding", selected: false },
			{ id: "7-2", name: "Robotics", selected: false },
			{ id: "7-3", name: "Gaming", selected: false },
			{ id: "7-4", name: "AI", selected: false },
			{ id: "7-5", name: "Gadgets", selected: false }
		]
	},
	{
		id: "8",
		name: "Nature",
		icon: "leaf",
		selected: false,
		subInterests: [
			{ id: "8-1", name: "Plants", selected: false },
			{ id: "8-2", name: "Weather", selected: false },
			{ id: "8-3", name: "Seasons", selected: false },
			{ id: "8-4", name: "Ecosystems", selected: false },
			{ id: "8-5", name: "Conservation", selected: false }
		]
	},
	{
		id: "9",
		name: "Stories",
		icon: "book",
		selected: false,
		subInterests: [
			{ id: "9-1", name: "Fairy Tales", selected: false },
			{ id: "9-2", name: "Adventure", selected: false },
			{ id: "9-3", name: "Mystery", selected: false },
			{ id: "9-4", name: "Fantasy", selected: false },
			{ id: "9-5", name: "Legends", selected: false }
		]
	},
	{
		id: "10",
		name: "Culture",
		icon: "globe",
		selected: false,
		subInterests: [
			{ id: "10-1", name: "Traditions", selected: false },
			{ id: "10-2", name: "Festivals", selected: false },
			{ id: "10-3", name: "Languages", selected: false },
			{ id: "10-4", name: "History", selected: false },
			{ id: "10-5", name: "Art History", selected: false }
		]
	}
]

export async function fetchInterests(): Promise<Interest[]> {
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return availableInterests
}

export async function updateInterests(
	selectedIds: { categoryId: string; subInterestIds: string[] }[]
): Promise<void> {
	await new Promise((resolve) => setTimeout(resolve, 500))
	console.log("Updated interests:", selectedIds)
}
