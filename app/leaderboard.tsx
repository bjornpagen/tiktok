import { View, Text, StyleSheet } from "react-native"
import { Suspense } from "react"
import { fetchLeaderboard } from "@/server/data/leaderboard"
import LeaderboardList from "@/components/LeaderboardList"
import LoadingLeaderboard from "@/components/LoadingLeaderboard"
import BottomTabBar from "@/components/BottomTabBar"

export default async function LeaderboardPage() {
	const entries = await fetchLeaderboard()

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Leaderboard</Text>
				<Text style={styles.subtitle}>
					See how you rank against other language learners
				</Text>
			</View>
			<Suspense fallback={<LoadingLeaderboard />}>
				<LeaderboardList entries={entries} />
			</Suspense>
			<BottomTabBar />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5"
	},
	header: {
		backgroundColor: "white",
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#E0E0E0"
	},
	title: {
		fontSize: 24,
		fontWeight: "700",
		color: "#333",
		marginBottom: 4
	},
	subtitle: {
		fontSize: 14,
		color: "#666",
		lineHeight: 20
	}
})
