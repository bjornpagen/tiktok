import "server-only"
import { fetchChallenges } from "@/server/data/challenges"

// This is a Server Component that fetches challenges data
export default async function ServerChallengeList() {
	// Fetch challenges data
	const challenges = await fetchChallenges()
	return challenges
}
