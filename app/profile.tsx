import { ScrollView, View, Text, StyleSheet } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"
import ProfileHeader from "@/components/ProfileHeader"
import ProfileStats from "@/components/ProfileStats"
import { fetchUserProfile } from "@/server/data/profile"
import { Suspense } from "react"
import LoadingProfile from "@/components/LoadingProfile"

export default async function ProfilePage() {
	const profile = await fetchUserProfile()

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Your Profile</Text>
				<Text style={styles.subtitle}>
					Track your progress and manage your learning journey
				</Text>
			</View>
			<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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

const styles = StyleSheet.create({
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
	},
	content: {
		flex: 1
	}
})
