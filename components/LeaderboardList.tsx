"use client"

import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { LeaderboardEntry } from "@/server/data/leaderboard"
import { Link } from "expo-router"
import { formatNumber } from "@/utils/format"

interface LeaderboardListProps {
	entries: LeaderboardEntry[]
}

export default function LeaderboardList({ entries }: LeaderboardListProps) {
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
		>
			{entries.map((entry) => (
				<Link key={entry.id} href={`/leaderboard/${entry.id}`} asChild>
					<TouchableOpacity>
						<View style={styles.entryContainer}>
							<Text style={styles.rank}>#{entry.rank}</Text>

							<Image source={{ uri: entry.avatarUrl }} style={styles.avatar} />

							<View style={styles.details}>
								<Text style={styles.name}>{entry.name}</Text>
								<View style={styles.statsRow}>
									<View style={styles.stat}>
										<Ionicons name="star" size={14} color="#FFD700" />
										<Text style={styles.statText}>
											{formatNumber(entry.stars)}
										</Text>
									</View>
									<View style={styles.stat}>
										<Ionicons name="flame" size={14} color="#FF5722" />
										<Text style={styles.statText}>{entry.streak}d</Text>
									</View>
									<View style={styles.stat}>
										<Text style={styles.statText}>
											{entry.currentLanguage.emoji} Lvl{" "}
											{entry.currentLanguage.level}
										</Text>
									</View>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				</Link>
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
	entryContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		marginBottom: 12,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	rank: {
		fontSize: 18,
		fontWeight: "700",
		color: "#666",
		width: 40
	},
	avatar: {
		width: 48,
		height: 48,
		borderRadius: 24,
		marginRight: 12
	},
	details: {
		flex: 1
	},
	name: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333",
		marginBottom: 4
	},
	statsRow: {
		flexDirection: "row",
		alignItems: "center"
	},
	stat: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 12
	},
	statText: {
		marginLeft: 4,
		fontSize: 14,
		color: "#666"
	}
})
