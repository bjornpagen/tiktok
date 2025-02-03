"use client"

import { View, Text, Image, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { UserProfile } from "@/server/data/profile"

interface ProfileHeaderProps {
	profile: Pick<
		UserProfile,
		"name" | "avatarUrl" | "bio" | "level" | "stars" | "starsToNextLevel"
	>
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
	const progressToNextLevel =
		(profile.stars / (profile.stars + profile.starsToNextLevel)) * 100

	return (
		<View style={styles.container}>
			<Image source={{ uri: profile.avatarUrl }} style={styles.avatar} />

			<Text style={styles.name}>{profile.name}</Text>
			<Text style={styles.bio}>{profile.bio}</Text>

			<View style={styles.levelContainer}>
				<View style={styles.levelBadge}>
					<Text style={styles.levelText}>Level {profile.level}</Text>
				</View>

				<View style={styles.starsContainer}>
					<Ionicons name="star" size={16} color="#FFD700" />
					<Text style={styles.starsText}>
						{profile.stars} / {profile.stars + profile.starsToNextLevel}
					</Text>
				</View>

				<View style={styles.progressBar}>
					<View
						style={[styles.progressFill, { width: `${progressToNextLevel}%` }]}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		padding: 20,
		backgroundColor: "white",
		borderRadius: 12,
		margin: 16,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		marginBottom: 12
	},
	name: {
		fontSize: 24,
		fontWeight: "700",
		color: "#333",
		marginBottom: 8
	},
	bio: {
		fontSize: 16,
		color: "#666",
		textAlign: "center",
		marginBottom: 16
	},
	levelContainer: {
		width: "100%",
		alignItems: "center"
	},
	levelBadge: {
		backgroundColor: "#6B4EFF",
		paddingHorizontal: 12,
		paddingVertical: 4,
		borderRadius: 12,
		marginBottom: 8
	},
	levelText: {
		color: "white",
		fontWeight: "600"
	},
	starsContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8
	},
	starsText: {
		marginLeft: 4,
		color: "#666"
	},
	progressBar: {
		width: "100%",
		height: 6,
		backgroundColor: "#F0F0F0",
		borderRadius: 3
	},
	progressFill: {
		height: "100%",
		backgroundColor: "#FFD700",
		borderRadius: 3
	}
})
