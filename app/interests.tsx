import { View, Text } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"
import { fetchInterests } from "@/server/data/interests"
import InterestPicker from "@/components/InterestPicker"

export default async function InterestsPage() {
	const interests = await fetchInterests()

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Your Interests</Text>
				<Text style={styles.subtitle}>
					Choose topics you'd like to learn about to personalize your experience
				</Text>
			</View>
			<InterestPicker interests={interests} />
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
