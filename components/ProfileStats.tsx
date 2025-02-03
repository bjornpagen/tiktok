"use client"

import { View, Text, StyleSheet } from "react-native"
import type { UserProfile } from "@/server/data/profile"
import StatsGrid from "./StatsGrid"

interface ProfileStatsProps {
	stats: UserProfile["stats"]
}

export default function ProfileStats({ stats }: ProfileStatsProps) {
	return (
		<View style={styles.container}>
			<Text style={styles.sectionTitle}>Your Stats</Text>
			<StatsGrid stats={stats} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 16,
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333",
		marginBottom: 16
	}
})
