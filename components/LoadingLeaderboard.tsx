import { View } from "react-native"

export default function LoadingLeaderboard() {
	return (
		<View style={styles.container}>
			<View style={styles.header} />
			{[1, 2, 3, 4, 5].map((i) => (
				<View key={i} style={styles.entryContainer}>
					<View style={styles.avatar} />
					<View style={styles.details} />
				</View>
			))}
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
		height: 40,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
		marginBottom: 24
	},
	entryContainer: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#E0E0E0",
		borderRadius: 12,
		padding: 16,
		marginBottom: 12,
		height: 80
	},
	avatar: {
		width: 48,
		height: 48,
		borderRadius: 24,
		backgroundColor: "#C0C0C0",
		marginRight: 12
	},
	details: {
		flex: 1,
		height: 32,
		backgroundColor: "#C0C0C0",
		borderRadius: 8
	}
} as const
