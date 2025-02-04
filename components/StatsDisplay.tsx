"use client"

import { View, Text } from "react-native"
import type { LanguageLevel } from "@/server/data/types"

interface StatsDisplayProps {
	stars: string
	currentLanguage: LanguageLevel
}

export default function StatsDisplay({
	stars,
	currentLanguage
}: StatsDisplayProps) {
	return (
		<View style={styles.statsRow}>
			<View style={styles.statItem}>
				<Text style={styles.statValue}>✨ {stars}</Text>
				<Text style={styles.statLabel}>Stars</Text>
			</View>
			<View style={styles.divider} />
			<View style={styles.statItem}>
				<Text style={styles.statValue}>
					{currentLanguage.emoji} {currentLanguage.level}
				</Text>
				<Text style={styles.statLabel}>Level</Text>
			</View>
		</View>
	)
}

const styles = {
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
