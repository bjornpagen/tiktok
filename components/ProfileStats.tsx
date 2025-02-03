"use client"

import { View, Text, StyleSheet } from "react-native"
import StatsGrid from "./StatsGrid"
import type { UserStats } from "@/server/data/types"

interface ProfileStatsProps {
	stats: UserStats
}

export default function ProfileStats({ stats }: ProfileStatsProps) {
	return (
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>Statistics</Text>
			<StatsGrid stats={stats} />
		</View>
	)
}

const styles = StyleSheet.create({
	section: {
		marginBottom: 16
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333",
		marginBottom: 16
	}
})
