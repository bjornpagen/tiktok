"use client"

import { useRef, useState } from "react"
import {
	View,
	Text,
	Dimensions,
	FlatList,
	type NativeSyntheticEvent,
	type NativeScrollEvent
} from "react-native"
import { useVideoPlayer, VideoView } from "expo-video"
import { ChatButton } from "./ChatButton"
import { ChatModal } from "./ChatModal"

// Constants
const { width, height } = Dimensions.get("window")
const TAB_BAR_HEIGHT = 70
const screenHeight = height - TAB_BAR_HEIGHT
const PLAYBACK_ID = "bO01scxnR7LmZ7OAmuWy3Ztrbzp4yxH00dJew5XJW5tno"

// Move interface declarations up
interface VideoCardProps {
	title: string
	description: string
}

interface Video {
	id: string
	title: string
	description: string
}

const VideoCard = ({ title, description }: VideoCardProps) => {
	const videoSource =
		"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
	const player = useVideoPlayer(videoSource, (player) => {
		player.loop = true
		player.muted = true
		player.play()
	})

	return (
		<View style={[styles.card, { height: screenHeight }]}>
			<VideoView
				style={styles.video}
				player={player}
				allowsFullscreen
				allowsPictureInPicture
				nativeControls={false}
			/>
			<View style={styles.titleContainer}>
				<View style={styles.contentBubble}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.description}>{description}</Text>
				</View>
			</View>
		</View>
	)
}

interface VideoFeedProps {
	initialVideos: Video[]
}

export default function VideoFeed({ initialVideos }: VideoFeedProps) {
	const [videos] = useState(initialVideos)
	const flatListRef = useRef<FlatList<Video>>(null)
	const [isChatVisible, setIsChatVisible] = useState(false)
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

	const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
		const offsetY = event.nativeEvent.contentOffset.y
		const index = Math.floor(offsetY / screenHeight)
		setCurrentVideoIndex(index)
	}

	return (
		<View style={styles.container}>
			<FlatList
				ref={flatListRef}
				data={videos}
				renderItem={({ item }) => (
					<VideoCard title={item.title} description={item.description} />
				)}
				keyExtractor={(item) => item.id}
				pagingEnabled
				snapToInterval={screenHeight}
				snapToAlignment="start"
				decelerationRate={0.1}
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				removeClippedSubviews={true}
				maxToRenderPerBatch={2}
				windowSize={3}
				onScroll={handleScroll}
				bounces={false}
			/>

			<View style={styles.chatButtonContainer}>
				<ChatButton onPress={() => setIsChatVisible(true)} />
			</View>

			<ChatModal
				visible={isChatVisible}
				onClose={() => setIsChatVisible(false)}
				videoTitle={videos[currentVideoIndex]?.title}
			/>
		</View>
	)
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: "#000"
	},
	card: {
		width: width,
		backgroundColor: "#000",
		position: "relative"
	},
	video: {
		width: "100%",
		height: "100%",
		position: "absolute"
	},
	titleContainer: {
		position: "absolute",
		bottom: 20,
		left: 0,
		right: 0,
		padding: 16
	},
	contentBubble: {
		backgroundColor: "rgba(74, 144, 226, 0.9)",
		borderRadius: 16,
		padding: 12,
		maxWidth: "65%",
		marginLeft: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	title: {
		fontSize: 18,
		fontWeight: "700",
		color: "#ffffff",
		marginBottom: 4,
		textShadowColor: "rgba(0, 0, 0, 0.75)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10
	},
	description: {
		fontSize: 14,
		color: "#ffffff",
		lineHeight: 20,
		textShadowColor: "rgba(0, 0, 0, 0.75)",
		textShadowOffset: { width: -1, height: 1 },
		textShadowRadius: 10
	},
	loaderContainer: {
		width: width,
		height: height,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000"
	},
	chatButtonContainer: {
		position: "absolute",
		bottom: 20,
		right: 16,
		zIndex: 1000
	}
} as const
