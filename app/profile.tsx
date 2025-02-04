import { ScrollView, View, Text, SafeAreaView } from "react-native"
import BottomTabBar from "@/components/BottomTabBar"
import ProfileHeader from "@/components/ProfileHeader"
import ProfileStats from "@/components/ProfileStats"
import LanguageSelector from "@/components/LanguageSelector"
import { fetchUserProfile, updateUserLanguage } from "@/server/data/profile"
import { Suspense } from "react"
import LoadingProfile from "@/components/LoadingProfile"

export default async function ProfilePage() {
	const profile = await fetchUserProfile()

	// Get current language level
	const currentLangDetails = profile.languageLevels.find(
		(lang) => lang.code === profile.currentLanguage
	)

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Your Profile</Text>
				<Text style={styles.subtitle}>
					Track your progress and manage your learning journey
				</Text>
			</View>
			<ScrollView
				style={styles.content}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<Suspense fallback={<LoadingProfile />}>
					<ProfileHeader
						profile={{
							name: profile.name,
							avatarUrl: profile.avatarUrl,
							bio: profile.bio,
							stars: profile.stars,
							currentLanguage: currentLangDetails || {
								code: profile.currentLanguage,
								level: 1,
								emoji: "🌎",
								name: "Unknown"
							}
						}}
					/>
					<LanguageSelector
						currentLanguage={profile.currentLanguage}
						languageLevels={profile.languageLevels}
						onLanguageChange={async (code) => {
							"use server"
							await updateUserLanguage(code)
						}}
					/>
					<ProfileStats stats={profile.stats} />
				</Suspense>
			</ScrollView>
			<View style={styles.bottomBarContainer}>
				<BottomTabBar />
			</View>
		</SafeAreaView>
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
	},
	content: {
		flex: 1
	},
	contentContainer: {
		padding: 16,
		paddingBottom: 80 // Add extra padding at bottom to prevent content from being cut off
	},
	bottomBarContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "white"
	}
} as const
