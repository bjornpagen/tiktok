import { View, Text } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"

export default function ProfilePage() {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text>Profile Coming Soon!</Text>
			</View>
			<BottomTabBar />
		</View>
	)
}
