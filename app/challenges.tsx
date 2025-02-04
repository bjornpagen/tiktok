import { View, Text } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"
import ChallengeList from "@/components/ChallengeList"
import { fetchChallenges } from "@/server/data/challenges"

export default async function ChallengesPage() {
	const challenges = await fetchChallenges()

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Language Challenges</Text>
				<Text style={styles.subtitle}>
					Complete challenges to earn points and improve your language skills
				</Text>
			</View>
			<ChallengeList challenges={challenges} />
			<BottomTabBar />
		</View>
	)
}

const styles = {
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
} as const
