"use client"

import { useState, useRef } from "react"
import {
	View,
	Text,
	Image,
	ActivityIndicator,
	StyleSheet,
	Dimensions,
	type ViewToken
} from "react-native"
import Animated, {
	useAnimatedScrollHandler,
	withSpring,
	useSharedValue,
	useAnimatedStyle,
	interpolate
} from "react-native-reanimated"

// Get screen dimensions
const { width, height } = Dimensions.get("window")

// Dummy data for initial testing
const dummyVideos = [
	{
		id: "1",
		title: "A Day at the Zoo",
		thumbnailUrl: "https://placeimg.com/640/480/animals"
	},
	{
		id: "2",
		title: "Space Adventure",
		thumbnailUrl: "https://placeimg.com/640/480/tech"
	},
	{
		id: "3",
		title: "Magic and Fairy Tales",
		thumbnailUrl: "https://placeimg.com/640/480/fantasy"
	}
]

// Move interface declarations up
interface VideoCardProps {
	title: string
	thumbnailUrl: string
	index: number
	scrollY: Animated.SharedValue<number>
}

interface Video {
	id: string
	title: string
	thumbnailUrl: string
}

const VideoCard = ({ title, thumbnailUrl, index, scrollY }: VideoCardProps) => {
	const animatedStyle = useAnimatedStyle(() => {
		const input = scrollY.value - index * height
		const scale = interpolate(input, [-height, 0, height], [0.9, 1, 0.9])
		const opacity = interpolate(input, [-height, 0, height], [0.75, 1, 0.75])

		return {
			transform: [{ scale }],
			opacity
		}
	})

	return (
		<Animated.View style={[styles.card, animatedStyle]}>
			<Image
				source={{ uri: thumbnailUrl }}
				style={styles.thumbnail}
				resizeMode="cover"
			/>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</Animated.View>
	)
}

interface VideoFeedProps {
	initialVideos: Video[]
}

export default function VideoFeed({ initialVideos }: VideoFeedProps) {
	const [videos, setVideos] = useState(initialVideos)
	const [loading, setLoading] = useState(false)
	const scrollY = useSharedValue(0)

	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (event) => {
			scrollY.value = event.contentOffset.y
		},
		onEndDrag: (event) => {
			const currentIndex = Math.round(event.contentOffset.y / height)
			const snapPoint = currentIndex * height

			// Snap to the nearest video
			scrollY.value = withSpring(snapPoint, {
				damping: 50,
				stiffness: 200
			})
		}
	})

	const fetchMoreVideos = async () => {
		if (loading) {
			return
		}
		setLoading(true)

		// Simulating API call with dummy data
		setTimeout(() => {
			setVideos((prevVideos) => [...prevVideos, ...dummyVideos])
			setLoading(false)
		}, 1500)
	}

	const onViewableItemsChanged = useRef(
		({ viewableItems }: { viewableItems: ViewToken[] }) => {
			if (viewableItems.length > 0) {
				// Handle video playback here when implementing actual video player
				console.log("Current video in view:", viewableItems[0].item.id)
			}
		}
	)

	const viewabilityConfig = {
		itemVisiblePercentThreshold: 50
	}

	return (
		<Animated.FlatList
			data={videos}
			renderItem={({ item, index }) => (
				<VideoCard
					title={item.title}
					thumbnailUrl={item.thumbnailUrl}
					index={index}
					scrollY={scrollY}
				/>
			)}
			keyExtractor={(item) => item.id}
			onScroll={scrollHandler}
			onEndReached={fetchMoreVideos}
			onEndReachedThreshold={0.5}
			pagingEnabled={true}
			snapToInterval={height}
			decelerationRate="fast"
			showsVerticalScrollIndicator={false}
			viewabilityConfig={viewabilityConfig}
			onViewableItemsChanged={onViewableItemsChanged.current}
			ListFooterComponent={
				loading ? (
					<View style={styles.loaderContainer}>
						<ActivityIndicator size="large" color="#ffffff" />
					</View>
				) : null
			}
		/>
	)
}

const styles = StyleSheet.create({
	card: {
		width: width,
		height: height,
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
		padding: 20,
		backgroundColor: "rgba(0,0,0,0.4)" // Changed from background gradient since it's not supported in RN
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
