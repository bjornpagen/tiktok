import { View, Text } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"

export default function ChallengesPage() {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Challenges Coming Soon!</Text>
			</View>
			<BottomTabBar />
		</View>
	)
}
