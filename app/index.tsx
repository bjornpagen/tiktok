import { Suspense } from "react"
import { View, StyleSheet } from "react-native"
import { fetchInitialVideos } from "@/server/data/videos"
import VideoFeed from "@/components/VideoFeed"
import BottomTabBar from "@/components/BottomTabBar"

// Home page - displays the main video feed for language learning content
export default async function HomePage() {
	const initialVideos = await fetchInitialVideos()

	return (
		<View style={styles.container}>
			<View style={styles.feedContainer}>
				<Suspense fallback={<View />}>
					<VideoFeed initialVideos={initialVideos} />
				</Suspense>
			</View>
			<BottomTabBar />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000"
	},
	feedContainer: {
		flex: 1
	}
})
