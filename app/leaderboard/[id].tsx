import { View, StyleSheet } from "react-native"
import { Suspense } from "react"
import { fetchLeaderboardEntryDetails } from "@/server/data/leaderboard"
import LeaderboardEntryDetails from "@/components/LeaderboardEntryDetails"
import LoadingLeaderboardDetails from "@/components/LoadingLeaderboardDetails"

export default async function LeaderboardEntryPage({
	id
}: {
	id: string
}) {
	const details = await fetchLeaderboardEntryDetails(id)

	return (
		<View style={styles.container}>
			<Suspense fallback={<LoadingLeaderboardDetails />}>
				<LeaderboardEntryDetails details={details} />
			</Suspense>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5"
	}
})
