import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { UserStats } from "@/server/data/types"

interface StatsGridProps {
	stats: UserStats
}

export default function StatsGrid({ stats }: StatsGridProps) {
	return (
		<View style={styles.statsGrid}>
			<View style={styles.statItem}>
				<Ionicons name="trophy" size={24} color="#6B4EFF" />
				<Text style={styles.statValue}>{stats.challengesCompleted}</Text>
				<Text style={styles.statLabel}>Challenges</Text>
			</View>

			<View style={styles.statItem}>
				<Ionicons name="book" size={24} color="#4CAF50" />
				<Text style={styles.statValue}>{stats.wordsLearned}</Text>
				<Text style={styles.statLabel}>Words</Text>
			</View>

			<View style={styles.statItem}>
				<Ionicons name="flame" size={24} color="#FF5722" />
				<Text style={styles.statValue}>{stats.daysStreak}</Text>
				<Text style={styles.statLabel}>Day Streak</Text>
			</View>

			<View style={styles.statItem}>
				<Ionicons name="time" size={24} color="#2196F3" />
				<Text style={styles.statValue}>{stats.minutesWatched}</Text>
				<Text style={styles.statLabel}>Minutes</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	statsGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between"
	},
	statItem: {
		width: "48%",
		alignItems: "center",
		backgroundColor: "white",
		padding: 16,
		borderRadius: 8,
		marginBottom: 12,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	statValue: {
		fontSize: 20,
		fontWeight: "700",
		color: "#333",
		marginTop: 8
	},
	statLabel: {
		fontSize: 14,
		color: "#666",
		marginTop: 4
	}
})
