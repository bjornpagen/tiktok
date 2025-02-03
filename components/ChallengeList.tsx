import { ScrollView, StyleSheet, View } from "react-native"
import ChallengeCard from "./ChallengeCard"
import type { Challenge } from "@/server/data/challenges"
import { Link } from "expo-router"
import { Suspense } from "react"

interface ChallengeListProps {
	challenges: Challenge[]
}

export default function ChallengeList({ challenges }: ChallengeListProps) {
	return (
		<ScrollView
			style={styles.scrollView}
			contentContainerStyle={styles.scrollContent}
			showsVerticalScrollIndicator={false}
		>
			{challenges.map((challenge) => (
				<View key={challenge.id}>
					<Suspense fallback={<View />}>
						<Link href={`/challenges/${challenge.id}`} asChild>
							<ChallengeCard challenge={challenge} />
						</Link>
					</Suspense>
				</View>
			))}
		</ScrollView>
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
