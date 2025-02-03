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
	onUpdateInterests?: (
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
		const newSelected = new Map(selectedSubInterests)
		const categorySet = newSelected.get(categoryId)

		if (categorySet?.has(subInterestId)) {
			categorySet.delete(subInterestId)
		} else {
			categorySet?.add(subInterestId)
		}

		setSelectedSubInterests(newSelected)

		if (onUpdateInterests) {
			const selectedIds = Array.from(newSelected.entries()).map(
				([categoryId, subInterests]) => ({
					categoryId,
					subInterestIds: Array.from(subInterests)
				})
			)
			await onUpdateInterests(selectedIds)
		}
	}

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
		>
			{interests.map((category) => (
				<View key={category.id} style={styles.card}>
					<View style={styles.categorySection}>
						<Text style={styles.categoryHeader}>{category.name}</Text>
						<View style={styles.pillsContainer}>
							{category.subInterests.map((subInterest) => {
								const isSelected = selectedSubInterests
									.get(category.id)
									?.has(subInterest.id)
								return (
									<TouchableOpacity
										key={subInterest.id}
										style={[styles.pill, isSelected && styles.selectedPill]}
										onPress={() =>
											toggleSubInterest(category.id, subInterest.id)
										}
									>
										<Text
											style={[
												styles.pillText,
												isSelected && styles.selectedPillText
											]}
										>
											{subInterest.name}
										</Text>
									</TouchableOpacity>
								)
							})}
						</View>
					</View>
				</View>
			))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5"
	},
	content: {
		padding: 16,
		paddingBottom: 90 // Account for bottom tab bar
	},
	card: {
		backgroundColor: "white",
		borderRadius: 12,
		marginBottom: 16,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	categorySection: {
		paddingHorizontal: 16,
		paddingVertical: 16
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
		margin: 4,
		minHeight: 36,
		justifyContent: "center",
		alignItems: "center"
	},
	selectedPill: {
		backgroundColor: "#6B4EFF"
	},
	pillText: {
		fontSize: 14,
		color: "#666",
		fontWeight: "500",
		textAlignVertical: "center"
	},
	selectedPillText: {
		color: "white",
		fontWeight: "500"
	}
})
