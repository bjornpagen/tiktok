import { View, StyleSheet } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"
import ChallengeList from "@/components/ChallengeList"
import { fetchChallenges } from "@/server/data/challenges"

export default async function ChallengesPage() {
	const challenges = await fetchChallenges()

	return (
		<View style={styles.container}>
			<ChallengeList challenges={challenges} />
			<BottomTabBar />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5"
	}
})
