"use client"

import { useState, useRef } from "react"
import { View, Text, Image, StyleSheet, Dimensions } from "react-native"
import Animated, {
	useAnimatedScrollHandler,
	useSharedValue,
	withSpring
} from "react-native-reanimated"

// Get screen dimensions
const { width, height } = Dimensions.get("window")

// Add bottom tab bar height constant
const TAB_BAR_HEIGHT = 70

// Update height calculation to account for tab bar
const screenHeight = height - TAB_BAR_HEIGHT

// Move interface declarations up
interface VideoCardProps {
	title: string
	thumbnailUrl: string
}

interface Video {
	id: string
	title: string
	thumbnailUrl: string
}

const VideoCard = ({ title, thumbnailUrl }: VideoCardProps) => (
	<View style={[styles.card, { height: screenHeight }]}>
		<Image
			source={{ uri: thumbnailUrl }}
			style={styles.thumbnail}
			resizeMode="cover"
		/>
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{title}</Text>
		</View>
	</View>
)

interface VideoFeedProps {
	initialVideos: Video[]
}

export default function VideoFeed({ initialVideos }: VideoFeedProps) {
	const [videos] = useState(initialVideos)
	const flatListRef = useRef<Animated.FlatList<Video>>(null)
	const translationY = useSharedValue(0)

	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (event) => {
			translationY.value = event.contentOffset.y
		},
		onEndDrag: (event) => {
			const offsetY = event.contentOffset.y
			const snapPoint = Math.round(offsetY / screenHeight) * screenHeight

			translationY.value = withSpring(snapPoint, {
				damping: 50,
				stiffness: 300,
				mass: 0.5,
				overshootClamping: true
			})

			flatListRef.current?.scrollToOffset({ offset: snapPoint, animated: true })
		}
	})

	return (
		<Animated.FlatList
			ref={flatListRef}
			data={videos}
			renderItem={({ item }) => (
				<VideoCard title={item.title} thumbnailUrl={item.thumbnailUrl} />
			)}
			keyExtractor={(item) => item.id}
			pagingEnabled
			snapToInterval={screenHeight}
			decelerationRate="fast"
			showsVerticalScrollIndicator={false}
			onScroll={scrollHandler}
			scrollEventThrottle={16}
		/>
	)
}

const styles = StyleSheet.create({
	card: {
		width: width,
		backgroundColor: "#000",
		position: "relative"
	},
	thumbnail: {
		width: "100%",
		height: "100%",
		position: "absolute"
	},
	titleContainer: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		padding: 20
	},
	title: {
		fontSize: 16,
		color: "#ffffff",
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
	}
})
