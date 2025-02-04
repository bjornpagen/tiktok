import { View } from "react-native"

export default function LoadingProfile() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View style={styles.avatar} />
				<View style={styles.nameBar} />
				<View style={styles.bioBar} />
				<View style={styles.levelBar} />
			</View>

			<View style={styles.stats}>
				<View style={styles.statGrid}>
					{[1, 2, 3, 4].map((i) => (
						<View key={i} style={styles.statItem} />
					))}
				</View>
			</View>
		</View>
	)
}

const styles = {
	container: {
		flex: 1,
		padding: 16
	},
	header: {
		alignItems: "center",
		backgroundColor: "white",
		borderRadius: 12,
		padding: 20,
		marginBottom: 16
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: "#E0E0E0",
		marginBottom: 12
	},
	nameBar: {
		width: 150,
		height: 24,
		backgroundColor: "#E0E0E0",
		borderRadius: 12,
		marginBottom: 8
	},
	bioBar: {
		width: 200,
		height: 16,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
		marginBottom: 16
	},
	levelBar: {
		width: "100%",
		height: 6,
		backgroundColor: "#E0E0E0",
		borderRadius: 3
	},
	stats: {
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16
	},
	statGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between"
	},
	statItem: {
		width: "48%",
		height: 100,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
		marginBottom: 12
	}
} as const
