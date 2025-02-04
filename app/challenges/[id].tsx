import { View } from "react-native"
import { Suspense } from "react"
import { fetchChallengeDetails } from "@/server/data/challenges"
import ChallengeDetails from "@/components/ChallengeDetails"
import LoadingChallengeDetails from "@/components/LoadingChallengeDetails"

export default async function ChallengeDetailsPage({
	id
}: {
	id: string
}) {
	const challengeDetails = await fetchChallengeDetails(id)

	return (
		<View style={styles.container}>
			<Suspense fallback={<LoadingChallengeDetails />}>
				<ChallengeDetails details={challengeDetails} />
			</Suspense>
		</View>
	)
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5"
	}
} as const
