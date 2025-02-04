"use client"

import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import type { Challenge } from "@/server/data/challenges"

export interface ChallengeCardProps {
	challenge: Challenge
	onPress?: () => void
}

function getTimeRemaining(deadline: string): string {
	const now = new Date()
	const end = new Date(deadline)
	const diffMs = end.getTime() - now.getTime()
	const diffHours = Math.max(0, Math.ceil(diffMs / (1000 * 3600)))

	if (diffHours === 0) {
		return "Expired"
	}

	if (diffHours < 24) {
		return `${diffHours}h left`
	}

	const days = Math.floor(diffHours / 24)
	const hours = diffHours % 24

	if (hours === 0) {
		return `${days}d left`
	}

	return `${days}d ${hours}h left`
}

function getExpiryText(expiry: Challenge["expiry"]): string {
	if (expiry.type === "time") {
		return getTimeRemaining(expiry.deadline)
	}
	// Make the participant count more descriptive
	const spotsLeft = expiry.maxClaims - expiry.currentClaims
	return `${spotsLeft} spots left`
}

export default function ChallengeCard({
	challenge,
	onPress
}: ChallengeCardProps) {
	const [expiryText, setExpiryText] = useState(() =>
		getExpiryText(challenge.expiry)
	)
	const progress = (challenge.progress.current / challenge.progress.total) * 100

	// Update time remaining every minute only for time-based challenges
	useEffect(() => {
		if (challenge.expiry.type !== "time") {
			return
		}

		const timer = setInterval(() => {
			setExpiryText(getExpiryText(challenge.expiry))
		}, 60000) // every minute

		return () => clearInterval(timer)
	}, [challenge.expiry])

	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.card}>
				<View style={styles.header}>
					<Text style={styles.title}>{challenge.title}</Text>
					<View style={styles.points}>
						<Ionicons name="star" size={16} color="#FFD700" />
						<Text style={styles.pointsText}>{challenge.points}</Text>
					</View>
				</View>

				<Text style={styles.description}>{challenge.description}</Text>

				<View style={styles.progressContainer}>
					<View style={styles.progressBar}>
						<View style={[styles.progressFill, { width: `${progress}%` }]} />
					</View>
					<Text style={styles.progressText}>
						{challenge.progress.current}/{challenge.progress.total}
					</Text>
				</View>

				<View style={styles.timeContainer}>
					<Ionicons
						name={
							challenge.expiry.type === "time"
								? "time-outline"
								: "people-outline"
						}
						size={14}
						color="#666"
					/>
					<Text style={styles.timeText}>{expiryText}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = {
	card: {
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		marginBottom: 12,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 12
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333"
	},
	points: {
		flexDirection: "row",
		alignItems: "center"
	},
	pointsText: {
		marginLeft: 4,
		fontSize: 14,
		fontWeight: "600",
		color: "#333"
	},
	progressContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8
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
		fontSize: 12,
		color: "#666",
		width: 35
	},
	timeContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	timeText: {
		marginLeft: 4,
		fontSize: 12,
		color: "#666"
	},
	description: {
		fontSize: 14,
		color: "#666",
		marginBottom: 12,
		lineHeight: 20
	}
} as const
