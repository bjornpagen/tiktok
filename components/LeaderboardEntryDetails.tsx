"use client"

import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import type { LeaderboardEntryDetails } from "@/server/data/leaderboard"
import StatsGrid from "./StatsGrid"
import StatsDisplay from "./StatsDisplay"

interface LeaderboardEntryDetailsProps {
	details: LeaderboardEntryDetails
}

export default function LeaderboardEntryDetails({
	details
}: LeaderboardEntryDetailsProps) {
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
		>
			<Link href="../" style={styles.backButton}>
				<Ionicons name="arrow-back" size={24} color="#333" />
			</Link>

			<View style={styles.header}>
				<Image source={{ uri: details.avatarUrl }} style={styles.avatar} />
				<Text style={styles.name}>{details.name}</Text>
				<StatsDisplay
					stars={details.stars}
					currentLanguage={details.currentLanguage}
				/>
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Statistics</Text>
				<StatsGrid stats={details.stats} />
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Recent Achievements</Text>
				{details.recentAchievements.map((achievement) => (
					<View key={achievement.id} style={styles.achievementItem}>
						<Ionicons
							name={achievement.icon as keyof typeof Ionicons.glyphMap}
							size={24}
							color="#6B4EFF"
						/>
						<View style={styles.achievementInfo}>
							<Text style={styles.achievementTitle}>{achievement.name}</Text>
							<Text style={styles.achievementDesc}>
								{achievement.description}
							</Text>
						</View>
						<Text style={styles.achievementDate}>
							{new Date(achievement.dateEarned).toLocaleDateString()}
						</Text>
					</View>
				))}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5"
	},
	content: {
		padding: 16
	},
	backButton: {
		marginBottom: 16
	},
	header: {
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 12,
		padding: 20,
		marginBottom: 16,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginBottom: 12
	},
	name: {
		fontSize: 24,
		fontWeight: "700",
		color: "#333",
		marginBottom: 8
	},
	section: {
		marginBottom: 24
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333",
		marginBottom: 16
	},
	achievementItem: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		padding: 16,
		borderRadius: 8,
		marginBottom: 8,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	achievementInfo: {
		flex: 1,
		marginLeft: 12
	},
	achievementTitle: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333"
	},
	achievementDesc: {
		fontSize: 14,
		color: "#666"
	},
	achievementDate: {
		fontSize: 12,
		color: "#999"
	}
})
