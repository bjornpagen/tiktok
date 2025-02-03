"use client"

import { StyleSheet } from "react-native"
import Animated, { FadeInDown } from "react-native-reanimated"
import ChallengeCard from "./ChallengeCard"
import type { Challenge } from "@/server/data/challenges"

interface ChallengeListProps {
	challenges: Challenge[]
}

export default function ChallengeList({ challenges }: ChallengeListProps) {
	return (
		<Animated.ScrollView
			style={styles.scrollView}
			contentContainerStyle={styles.scrollContent}
			showsVerticalScrollIndicator={false}
		>
			{challenges.map((challenge, index) => (
				<Animated.View
					key={challenge.id}
					entering={FadeInDown.delay(index * 200)}
				>
					<ChallengeCard
						challenge={challenge}
						onPress={() => {
							// TODO: Navigate to challenge detail screen
							console.log("Challenge pressed:", challenge.id)
						}}
					/>
				</Animated.View>
			))}
		</Animated.ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		flex: 1
	},
	scrollContent: {
		paddingTop: 16,
		paddingBottom: 90 // Account for bottom tab bar
	}
})
