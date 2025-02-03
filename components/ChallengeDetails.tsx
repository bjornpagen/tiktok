import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"

interface Peer {
	id: string
	name: string
	progress: number
	avatar?: string
}

interface Word {
	word: string
	dateDiscovered: string
	dateLastSeen?: string
}

interface TimeBasedExpiry {
	type: "time"
	deadline: string
}

interface ParticipantBasedExpiry {
	type: "participants"
	currentClaims: number
	maxClaims: number
}

interface ChallengeDetailsProps {
	details: {
		id: string
		title: string
		description: string
		expiry: TimeBasedExpiry | ParticipantBasedExpiry
		points: number
		progress: {
			current: number
			total: number
		}
		wordsLearned: Word[]
		peers: Peer[]
	}
}

function formatDeadline(deadline: string): string {
	const date = new Date(deadline)
	const now = new Date()
	const diffMs = date.getTime() - now.getTime()
	const diffHours = Math.max(0, Math.ceil(diffMs / (1000 * 3600)))

	if (diffHours === 0) {
		return "Challenge expired"
	}

	// Format the actual date
	const dateStr = date.toLocaleDateString(undefined, {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	})

	// Add remaining time
	if (diffHours < 24) {
		return `Ends ${dateStr} (${diffHours}h remaining)`
	}

	const days = Math.floor(diffHours / 24)
	const hours = diffHours % 24

	if (hours === 0) {
		return `Ends ${dateStr} (${days}d remaining)`
	}

	return `Ends ${dateStr} (${days}d ${hours}h remaining)`
}

function formatParticipants(expiry: ParticipantBasedExpiry): string {
	const spotsLeft = expiry.maxClaims - expiry.currentClaims
	return `${spotsLeft} spots remaining (${expiry.currentClaims}/${expiry.maxClaims} joined)`
}

export default function ChallengeDetails({ details }: ChallengeDetailsProps) {
	const expiryText =
		details.expiry.type === "time"
			? formatDeadline(details.expiry.deadline)
			: formatParticipants(details.expiry)

	return (
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
			<Link href="../" style={styles.backButton}>
				<Ionicons name="arrow-back" size={24} color="#333" />
			</Link>

			<View style={styles.header}>
				<Text style={styles.title}>{details.title}</Text>
				<View style={styles.points}>
					<Ionicons name="star" size={16} color="#FFD700" />
					<Text style={styles.pointsText}>{details.points}</Text>
				</View>
			</View>

			<Text style={styles.description}>{details.description}</Text>
			<View style={styles.expiryContainer}>
				<Ionicons
					name={
						details.expiry.type === "time" ? "time-outline" : "people-outline"
					}
					size={18}
					color="#666"
				/>
				<Text style={styles.expiryText}>{expiryText}</Text>
			</View>

			<View>
				<Text style={styles.sectionTitle}>Words Learned</Text>
				<View style={styles.wordsContainer}>
					{details.wordsLearned.length === 0 ? (
						<Text style={styles.emptyText}>
							No words learned yet. Watch videos to discover new words!
						</Text>
					) : (
						details.wordsLearned.map((word) => (
							<View key={word.word} style={styles.wordItem}>
								<Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
								<View style={styles.wordDetails}>
									<Text style={styles.wordText}>{word.word}</Text>
									<Text style={styles.wordDate}>
										Discovered{" "}
										{new Date(word.dateDiscovered).toLocaleDateString()}
									</Text>
								</View>
							</View>
						))
					)}
				</View>
			</View>

			<View>
				<Text style={styles.sectionTitle}>Peer Progress</Text>
				{details.peers.map((peer) => (
					<View key={peer.id} style={styles.peerContainer}>
						<View style={styles.peerInfo}>
							<View style={styles.peerAvatar}>
								<Text style={styles.peerInitial}>
									{peer.name[0].toUpperCase()}
								</Text>
							</View>
							<Text style={styles.peerName}>{peer.name}</Text>
						</View>
						<View style={styles.peerProgress}>
							<View style={styles.progressBar}>
								<View
									style={[styles.progressFill, { width: `${peer.progress}%` }]}
								/>
							</View>
							<Text style={styles.progressText}>{peer.progress}%</Text>
						</View>
					</View>
				))}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	},
	backButton: {
		marginBottom: 16
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16
	},
	title: {
		fontSize: 24,
		fontWeight: "700",
		color: "#333",
		flex: 1,
		marginRight: 16
	},
	points: {
		flexDirection: "row",
		alignItems: "center"
	},
	pointsText: {
		marginLeft: 4,
		fontSize: 16,
		fontWeight: "600",
		color: "#333"
	},
	description: {
		fontSize: 16,
		color: "#666",
		marginBottom: 24,
		lineHeight: 24
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333",
		marginBottom: 16
	},
	wordsContainer: {
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		marginBottom: 24
	},
	wordItem: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 12
	},
	wordDetails: {
		flex: 1,
		marginLeft: 12
	},
	wordText: {
		fontSize: 16,
		color: "#333",
		fontWeight: "500"
	},
	wordDate: {
		fontSize: 12,
		color: "#666",
		marginTop: 2
	},
	emptyText: {
		fontSize: 14,
		color: "#666",
		fontStyle: "italic",
		textAlign: "center",
		padding: 16
	},
	peerContainer: {
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		marginBottom: 12
	},
	peerInfo: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 12
	},
	peerAvatar: {
		width: 36,
		height: 36,
		borderRadius: 18,
		backgroundColor: "#6B4EFF",
		justifyContent: "center",
		alignItems: "center",
		marginRight: 12
	},
	peerInitial: {
		color: "white",
		fontSize: 16,
		fontWeight: "600"
	},
	peerName: {
		fontSize: 16,
		color: "#333",
		fontWeight: "500"
	},
	peerProgress: {
		flexDirection: "row",
		alignItems: "center"
	},
	progressBar: {
		flex: 1,
		height: 6,
		backgroundColor: "#F0F0F0",
		borderRadius: 3,
		marginRight: 8
	},
	progressFill: {
		height: "100%",
		backgroundColor: "#4CAF50",
		borderRadius: 3
	},
	progressText: {
		fontSize: 14,
		color: "#666",
		width: 45
	},
	expiryContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f5f5f5",
		padding: 12,
		borderRadius: 8,
		marginBottom: 24
	},
	expiryText: {
		fontSize: 14,
		color: "#666",
		marginLeft: 8
	}
})
