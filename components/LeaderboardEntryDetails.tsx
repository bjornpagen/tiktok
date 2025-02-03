"use client"

import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import type { LeaderboardEntryDetails } from "@/server/data/leaderboard"
import StatsGrid from "./StatsGrid"

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
				<View style={styles.badgeRow}>
					<View style={styles.badge}>
						<Ionicons name="star" size={16} color="#FFD700" />
						<Text style={styles.badgeText}>{details.points} pts</Text>
					</View>
					<View style={styles.badge}>
						<Ionicons name="flame" size={16} color="#FF5722" />
						<Text style={styles.badgeText}>{details.streak}d streak</Text>
					</View>
					<View style={styles.levelBadge}>
						<Text style={styles.levelText}>Level {details.level}</Text>
					</View>
				</View>
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
							name={achievement.icon as any}
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
	badgeRow: {
		flexDirection: "row",
		gap: 8
	},
	badge: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F0F0F0",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 12
	},
	badgeText: {
		marginLeft: 4,
		color: "#666"
	},
	levelBadge: {
		backgroundColor: "#6B4EFF",
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: 12
	},
	levelText: {
		color: "white",
		fontWeight: "600"
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
