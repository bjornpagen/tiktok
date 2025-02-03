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
			<Suspense fallback={<View />}>
				<View style={styles.feedContainer}>
					<VideoFeed initialVideos={initialVideos} />
				</View>
			</Suspense>
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
