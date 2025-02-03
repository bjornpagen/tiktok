"use client"

import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView
} from "react-native"
import { useState } from "react"
import type { Interest } from "@/server/data/interests"

interface InterestPickerProps {
	interests: Interest[]
	onUpdateInterests: (
		selectedIds: { categoryId: string; subInterestIds: string[] }[]
	) => Promise<void>
}

export default function InterestPicker({
	interests,
	onUpdateInterests
}: InterestPickerProps) {
	const [selectedSubInterests, setSelectedSubInterests] = useState<
		Map<string, Set<string>>
	>(
		new Map(
			interests.map((category) => [
				category.id,
				new Set(
					category.subInterests
						.filter((sub) => sub.selected)
						.map((sub) => sub.id)
				)
			])
		)
	)

	const toggleSubInterest = async (
		categoryId: string,
		subInterestId: string
	) => {
		const newSubInterests = new Map(selectedSubInterests)
		const categorySubInterests = new Set(newSubInterests.get(categoryId))

		if (categorySubInterests.has(subInterestId)) {
			categorySubInterests.delete(subInterestId)
		} else {
			categorySubInterests.add(subInterestId)
		}

		newSubInterests.set(categoryId, categorySubInterests)
		setSelectedSubInterests(newSubInterests)

		// Update with all selected interests
		const selectedData = Array.from(newSubInterests.entries())
			.filter(([_, subInterests]) => subInterests.size > 0)
			.map(([categoryId, subInterests]) => ({
				categoryId,
				subInterestIds: Array.from(subInterests)
			}))
		await onUpdateInterests(selectedData)
	}

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<Text style={styles.title}>Select Your Interests</Text>
			<Text style={styles.subtitle}>
				Choose topics you'd like to learn about. This helps us personalize your
				video feed.
			</Text>

			<View style={styles.categoriesContainer}>
				{interests.map((category) => (
					<View key={category.id} style={styles.categorySection}>
						<Text style={styles.categoryHeader}>{category.name}</Text>
						<View style={styles.pillsContainer}>
							{category.subInterests.map((subInterest) => (
								<TouchableOpacity
									key={subInterest.id}
									style={[
										styles.pill,
										selectedSubInterests
											.get(category.id)
											?.has(subInterest.id) && styles.selectedPill
									]}
									onPress={() => toggleSubInterest(category.id, subInterest.id)}
								>
									<Text
										style={[
											styles.pillText,
											selectedSubInterests
												.get(category.id)
												?.has(subInterest.id) && styles.selectedPillText
										]}
									>
										{subInterest.name}
									</Text>
								</TouchableOpacity>
							))}
						</View>
					</View>
				))}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	title: {
		fontSize: 24,
		fontWeight: "700",
		color: "#333",
		marginBottom: 8,
		paddingHorizontal: 16
	},
	subtitle: {
		fontSize: 16,
		color: "#666",
		marginBottom: 24,
		lineHeight: 22,
		paddingHorizontal: 16
	},
	categoriesContainer: {
		paddingBottom: 100 // Account for bottom tab bar
	},
	categorySection: {
		marginBottom: 24,
		paddingHorizontal: 16
	},
	categoryHeader: {
		fontSize: 20,
		fontWeight: "600",
		color: "#333",
		marginBottom: 12
	},
	pillsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginHorizontal: -4 // Compensate for pill margin
	},
	pill: {
		backgroundColor: "#F0F0F0",
		borderRadius: 20,
		paddingHorizontal: 16,
		paddingVertical: 8,
		margin: 4
	},
	selectedPill: {
		backgroundColor: "#6B4EFF"
	},
	pillText: {
		fontSize: 14,
		color: "#666"
	},
	selectedPillText: {
		color: "white",
		fontWeight: "500"
	}
})
