import { View, StyleSheet } from "react-native"
import { Suspense } from "react"
import BottomTabBar from "@/components/BottomTabBar"
import ChallengeList from "@/components/ChallengeList"
import LoadingChallenges from "@/components/LoadingChallenges"
import ServerChallengeList from "@/server/components/ServerChallengeList.server"

export default async function ChallengesPage() {
	const challenges = await ServerChallengeList()

	return (
		<View style={styles.container}>
			<Suspense fallback={<LoadingChallenges />}>
				<ChallengeList challenges={challenges} />
			</Suspense>
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
