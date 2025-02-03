"use client"

import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type {
	Challenge,
	TimeBasedExpiry,
	ParticipantBasedExpiry
} from "@/server/data/challenges"
import { Link } from "expo-router"

interface ChallengeListProps {
	challenges: Challenge[]
}

function formatTimeLeft(deadline: string): string {
	const now = Date.now()
	const timeLeft = new Date(deadline).getTime() - now

	// Convert to relevant units
	const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
	const hours = Math.floor(
		(timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	)
	const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))

	if (timeLeft <= 0) {
		return "Expired"
	}
	if (days > 0) {
		return `${days}d left`
	}
	if (hours > 0) {
		return `${hours}h left`
	}
	return `${Math.max(1, minutes)}m left` // Show at least 1 minute if time is remaining
}

function ExpiryInfo({
	expiry
}: { expiry: TimeBasedExpiry | ParticipantBasedExpiry }) {
	if (expiry.type === "time") {
		return (
			<View style={styles.stat}>
				<Ionicons name="time" size={14} color="#666" />
				<Text style={styles.statText}>{formatTimeLeft(expiry.deadline)}</Text>
			</View>
		)
	}

	return (
		<View style={styles.stat}>
			<Ionicons name="people" size={14} color="#666" />
			<Text style={styles.statText}>
				{expiry.maxClaims - expiry.currentClaims} spots left
			</Text>
		</View>
	)
}

export default function ChallengeList({ challenges }: ChallengeListProps) {
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.content}
			showsVerticalScrollIndicator={false}
		>
			{challenges.map((challenge) => (
				<Link key={challenge.id} href={`/challenges/${challenge.id}`} asChild>
					<TouchableOpacity>
						<View style={styles.card}>
							<View style={styles.cardContent}>
								<Text style={styles.title}>{challenge.title}</Text>
								<Text style={styles.description}>{challenge.description}</Text>
								<View style={styles.statsRow}>
									<View style={styles.stat}>
										<Ionicons name="star" size={14} color="#FFD700" />
										<Text style={styles.statText}>
											{challenge.points} points
										</Text>
									</View>
									<ExpiryInfo expiry={challenge.expiry} />
									<View style={styles.difficultyBadge}>
										<Text style={styles.difficultyText}>
											{challenge.difficulty}
										</Text>
									</View>
								</View>
							</View>
						</View>
					</TouchableOpacity>
				</Link>
			))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5"
	},
	content: {
		padding: 16,
		paddingBottom: 90 // Account for bottom tab bar
	},
	card: {
		backgroundColor: "white",
		borderRadius: 12,
		marginBottom: 16,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	cardContent: {
		padding: 16
	},
	title: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333",
		marginBottom: 4
	},
	description: {
		fontSize: 14,
		color: "#666",
		marginBottom: 12,
		lineHeight: 20
	},
	statsRow: {
		flexDirection: "row",
		alignItems: "center"
	},
	stat: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 12
	},
	statText: {
		marginLeft: 4,
		fontSize: 14,
		color: "#666"
	},
	difficultyBadge: {
		backgroundColor: "#6B4EFF",
		paddingHorizontal: 8,
		paddingVertical: 2,
		borderRadius: 12
	},
	difficultyText: {
		color: "white",
		fontSize: 12,
		fontWeight: "600"
	}
})
