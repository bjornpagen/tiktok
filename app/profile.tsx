import { ScrollView, View } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"
import ProfileHeader from "@/components/ProfileHeader"
import ProfileStats from "@/components/ProfileStats"
import { fetchUserProfile } from "@/server/data/profile"
import { Suspense } from "react"
import LoadingProfile from "@/components/LoadingProfile"

export default async function ProfilePage() {
	const profile = await fetchUserProfile()

	return (
		<View style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
				<Suspense fallback={<LoadingProfile />}>
					<ProfileHeader
						profile={{
							name: profile.name,
							avatarUrl: profile.avatarUrl,
							bio: profile.bio,
							level: profile.level,
							stars: profile.stars,
							starsToNextLevel: profile.starsToNextLevel
						}}
					/>
					<ProfileStats stats={profile.stats} />
				</Suspense>
			</ScrollView>
			<BottomTabBar />
		</View>
	)
}
