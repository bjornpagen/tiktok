"use client"

import { View, Text, Image } from "react-native"
import type { LanguageLevel } from "@/server/data/types"
import StatsDisplay from "./StatsDisplay"
import { formatNumber } from "@/utils/format"

interface ProfileHeaderProps {
	profile: {
		name: string
		avatarUrl: string
		bio: string
		stars: number
		currentLanguage: LanguageLevel
	}
}

export default function ProfileHeader({ profile }: ProfileHeaderProps) {
	return (
		<View style={styles.container}>
			<Image source={{ uri: profile.avatarUrl }} style={styles.avatar} />
			<Text style={styles.name}>{profile.name}</Text>
			<Text style={styles.bio}>{profile.bio}</Text>
			<StatsDisplay
				stars={formatNumber(profile.stars)}
				currentLanguage={profile.currentLanguage}
			/>
		</View>
	)
}

const styles = {
	container: {
		alignItems: "center",
		padding: 20,
		backgroundColor: "white",
		borderRadius: 12,
		marginBottom: 16,
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
	statsRow: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 8
	},
	statItem: {
		flex: 1,
		alignItems: "center"
	},
	statValue: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333",
		marginBottom: 4
	},
	statLabel: {
		fontSize: 14,
		color: "#666"
	},
	divider: {
		width: 1,
		height: "100%",
		backgroundColor: "#F0F0F0",
		marginHorizontal: 8
	}
} as const
