import { View, StyleSheet } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"
import ChallengeList from "@/components/ChallengeList"
import ServerChallengeList from "@/server/components/ServerChallengeList.server"

export default async function ChallengesPage() {
	const challenges = await ServerChallengeList()

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
