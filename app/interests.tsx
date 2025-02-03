import { View } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"
import { fetchInterests } from "@/server/data/interests"
import InterestPicker from "@/components/InterestPicker"

export default async function InterestsPage() {
	const interests = await fetchInterests()

	return (
		<View style={{ flex: 1 }}>
			<InterestPicker
				interests={interests}
				onUpdateInterests={async (newInterests) => {
					console.log(newInterests)
				}}
			/>
			<BottomTabBar />
		</View>
	)
}
