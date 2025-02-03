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
	learned: boolean
	lastPracticed?: string
}

interface ChallengeDetailsProps {
	details: {
		id: string
		title: string
		description: string
		deadline: string
		points: number
		progress: {
			current: number
			total: number
		}
		words: Word[]
		peers: Peer[]
	}
}

export default function ChallengeDetails({ details }: ChallengeDetailsProps) {
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

			<View>
				<Text style={styles.sectionTitle}>Words to Learn</Text>
				<View style={styles.wordsContainer}>
					{details.words.map((word) => (
						<View key={word.word} style={styles.wordItem}>
							<Ionicons
								name={word.learned ? "checkmark-circle" : "ellipse-outline"}
								size={20}
								color={word.learned ? "#4CAF50" : "#666"}
							/>
							<Text
								style={[styles.wordText, word.learned && styles.learnedWord]}
							>
								{word.word}
							</Text>
						</View>
					))}
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
	wordText: {
		fontSize: 16,
		color: "#333",
		marginLeft: 12
	},
	learnedWord: {
		color: "#4CAF50",
		fontWeight: "500"
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
	}
})
