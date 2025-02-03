import { Suspense } from "react"
import { View } from "react-native"
import { fetchInitialVideos } from "@/server/data/videos"
import VideoFeed from "@/components/VideoFeed"
import BottomTabBar from "@/components/BottomTabBar"

export default async function FeedPage() {
	const initialVideos = await fetchInitialVideos()

	return (
		<View style={{ flex: 1 }}>
			<Suspense fallback={<View />}>
				<View style={{ flex: 1 }}>
					<VideoFeed initialVideos={initialVideos} />
				</View>
			</Suspense>
			<BottomTabBar />
		</View>
	)
}
