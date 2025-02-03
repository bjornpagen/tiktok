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
			{ id: "10-5", name: "Art History", selected: false },
			{ id: "10-6", name: "Folk Tales", selected: false },
			{ id: "10-7", name: "Traditional Games", selected: false },
			{ id: "10-8", name: "Cultural Food", selected: false },
			{ id: "10-9", name: "Traditional Music", selected: false },
			{ id: "10-10", name: "Traditional Dance", selected: false },
			{ id: "10-11", name: "Cultural Clothing", selected: false },
			{ id: "10-12", name: "Celebrations", selected: false },
			{ id: "10-13", name: "Customs", selected: false },
			{ id: "10-14", name: "Heritage", selected: false },
			{ id: "10-15", name: "Cultural Art", selected: false },
			{ id: "10-16", name: "World Cultures", selected: false }
		]
	},
	{
		id: "11",
		name: "Daily Life",
		icon: "calendar",
		selected: false,
		subInterests: [
			{ id: "11-1", name: "Family", selected: false },
			{ id: "11-2", name: "Home", selected: false },
			{ id: "11-3", name: "Morning Routine", selected: false },
			{ id: "11-4", name: "Shopping", selected: false },
			{ id: "11-5", name: "Transportation", selected: false },
			{ id: "11-6", name: "Clothes", selected: false },
			{ id: "11-7", name: "Weather", selected: false },
			{ id: "11-8", name: "Seasons", selected: false },
			{ id: "11-9", name: "Breakfast", selected: false },
			{ id: "11-10", name: "Lunch", selected: false },
			{ id: "11-11", name: "Dinner", selected: false },
			{ id: "11-12", name: "Bedtime", selected: false },
			{ id: "11-13", name: "Weekend Activities", selected: false },
			{ id: "11-14", name: "House Chores", selected: false },
			{ id: "11-15", name: "Personal Care", selected: false },
			{ id: "11-16", name: "Free Time", selected: false }
		]
	},
	{
		id: "12",
		name: "Emotions",
		icon: "happy",
		selected: false,
		subInterests: [
			{ id: "12-1", name: "Happiness", selected: false },
			{ id: "12-2", name: "Friendship", selected: false },
			{ id: "12-3", name: "Kindness", selected: false },
			{ id: "12-4", name: "Empathy", selected: false },
			{ id: "12-5", name: "Self-expression", selected: false },
			{ id: "12-6", name: "Confidence", selected: false },
			{ id: "12-7", name: "Problem Solving", selected: false },
			{ id: "12-8", name: "Sharing", selected: false },
			{ id: "12-9", name: "Teamwork", selected: false },
			{ id: "12-10", name: "Helping Others", selected: false },
			{ id: "12-11", name: "Understanding Feelings", selected: false },
			{ id: "12-12", name: "Managing Emotions", selected: false },
			{ id: "12-13", name: "Being Brave", selected: false },
			{ id: "12-14", name: "Making Friends", selected: false },
			{ id: "12-15", name: "Being Patient", selected: false },
			{ id: "12-16", name: "Showing Care", selected: false }
		]
	},
	{
		id: "13",
		name: "Travel",
		icon: "airplane",
		selected: false,
		subInterests: [
			{ id: "13-1", name: "Countries", selected: false },
			{ id: "13-2", name: "Cities", selected: false },
			{ id: "13-3", name: "Landmarks", selected: false },
			{ id: "13-4", name: "Adventures", selected: false },
			{ id: "13-5", name: "Maps", selected: false },
			{ id: "13-6", name: "Transportation", selected: false },
			{ id: "13-7", name: "Vacations", selected: false },
			{ id: "13-8", name: "Exploring", selected: false },
			{ id: "13-9", name: "Tourist Spots", selected: false },
			{ id: "13-10", name: "Travel Planning", selected: false },
			{ id: "13-11", name: "Packing", selected: false },
			{ id: "13-12", name: "Travel Safety", selected: false },
			{ id: "13-13", name: "Local Customs", selected: false },
			{ id: "13-14", name: "Souvenirs", selected: false },
			{ id: "13-15", name: "Travel Stories", selected: false },
			{ id: "13-16", name: "World Wonders", selected: false }
		]
	},
	{
		id: "14",
		name: "School",
		icon: "school",
		selected: false,
		subInterests: [
			{ id: "14-1", name: "Math", selected: false },
			{ id: "14-2", name: "Science", selected: false },
			{ id: "14-3", name: "Reading", selected: false },
			{ id: "14-4", name: "Writing", selected: false },
			{ id: "14-5", name: "Art Class", selected: false },
			{ id: "14-6", name: "Music Class", selected: false },
			{ id: "14-7", name: "Physical Education", selected: false },
			{ id: "14-8", name: "History Class", selected: false },
			{ id: "14-9", name: "School Friends", selected: false },
			{ id: "14-10", name: "Teachers", selected: false },
			{ id: "14-11", name: "Homework", selected: false },
			{ id: "14-12", name: "School Supplies", selected: false },
			{ id: "14-13", name: "School Rules", selected: false },
			{ id: "14-14", name: "School Events", selected: false },
			{ id: "14-15", name: "Learning Games", selected: false },
			{ id: "14-16", name: "School Projects", selected: false }
		]
	},
	{
		id: "15",
		name: "Hobbies",
		icon: "game-controller",
		selected: false,
		subInterests: [
			{ id: "15-1", name: "Collecting", selected: false },
			{ id: "15-2", name: "Photography", selected: false },
			{ id: "15-3", name: "Gardening", selected: false },
			{ id: "15-4", name: "Board Games", selected: false },
			{ id: "15-5", name: "Puzzles", selected: false },
			{ id: "15-6", name: "Building", selected: false },
			{ id: "15-7", name: "Magic Tricks", selected: false },
			{ id: "15-8", name: "Drawing", selected: false },
			{ id: "15-9", name: "Painting", selected: false },
			{ id: "15-10", name: "Crafting", selected: false },
			{ id: "15-11", name: "Reading Books", selected: false },
			{ id: "15-12", name: "Playing Music", selected: false },
			{ id: "15-13", name: "Dancing", selected: false },
			{ id: "15-14", name: "Cooking", selected: false },
			{ id: "15-15", name: "Sports", selected: false },
			{ id: "15-16", name: "Video Games", selected: false }
		]
	},
	{
		id: "16",
		name: "Fantasy",
		icon: "sparkles",
		selected: false,
		subInterests: [
			{ id: "16-1", name: "Magic", selected: false },
			{ id: "16-2", name: "Dragons", selected: false },
			{ id: "16-3", name: "Unicorns", selected: false },
			{ id: "16-4", name: "Superheroes", selected: false },
			{ id: "16-5", name: "Mythical Creatures", selected: false },
			{ id: "16-6", name: "Wizards", selected: false },
			{ id: "16-7", name: "Magical Worlds", selected: false }
		]
	},
	{
		id: "17",
		name: "Environment",
		icon: "earth",
		selected: false,
		subInterests: [
			{ id: "17-1", name: "Recycling", selected: false },
			{ id: "17-2", name: "Clean Energy", selected: false },
			{ id: "17-3", name: "Ocean Life", selected: false },
			{ id: "17-4", name: "Forests", selected: false },
			{ id: "17-5", name: "Climate", selected: false },
			{ id: "17-6", name: "Sustainability", selected: false }
		]
	},
	{
		id: "18",
		name: "Celebrations",
		icon: "gift",
		selected: false,
		subInterests: [
			{ id: "18-1", name: "Birthdays", selected: false },
			{ id: "18-2", name: "Holidays", selected: false },
			{ id: "18-3", name: "Parties", selected: false },
			{ id: "18-4", name: "Traditions", selected: false },
			{ id: "18-5", name: "Games", selected: false },
			{ id: "18-6", name: "Decorations", selected: false },
			{ id: "18-7", name: "Gift Giving", selected: false },
			{ id: "18-8", name: "Special Foods", selected: false },
			{ id: "18-9", name: "Cultural Events", selected: false },
			{ id: "18-10", name: "Family Gatherings", selected: false }
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
