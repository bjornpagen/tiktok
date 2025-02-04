import { View } from "react-native"

export default function LoadingLeaderboardDetails() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.avatar} />
				<View style={styles.nameContainer} />
			</View>

			<View style={styles.section}>
				<View style={styles.sectionTitle} />
				<View style={styles.statsGrid}>
					{[1, 2, 3, 4].map((i) => (
						<View key={i} style={styles.statItem} />
					))}
				</View>
			</View>

			<View style={styles.section}>
				<View style={styles.sectionTitle} />
				<View style={styles.achievementsList}>
					{[1, 2, 3].map((i) => (
						<View key={i} style={styles.achievementItem} />
					))}
				</View>
			</View>

			<View style={styles.section}>
				<View style={styles.sectionTitle} />
				<View style={styles.progressChart} />
			</View>
		</View>
	)
}

const styles = {
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: "#F5F5F5"
	},
	header: {
		alignItems: "center",
		backgroundColor: "#E0E0E0",
		borderRadius: 12,
		padding: 20,
		marginBottom: 16
	},
	avatar: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: "#C0C0C0",
		marginBottom: 12
	},
	nameContainer: {
		width: 150,
		height: 24,
		backgroundColor: "#C0C0C0",
		borderRadius: 12
	},
	section: {
		marginBottom: 24
	},
	sectionTitle: {
		width: 120,
		height: 24,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
		marginBottom: 16
	},
	statsGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between"
	},
	statItem: {
		width: "48%",
		height: 80,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
		marginBottom: 12
	},
	achievementsList: {
		gap: 12
	},
	achievementItem: {
		height: 80,
		backgroundColor: "#E0E0E0",
		borderRadius: 8
	},
	progressChart: {
		height: 200,
		backgroundColor: "#E0E0E0",
		borderRadius: 8
	}
} as const
