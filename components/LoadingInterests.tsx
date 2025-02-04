import { View } from "react-native"

export default function LoadingInterests() {
	return (
		<View style={styles.container}>
			<View style={styles.header} />
			<View style={styles.grid}>
				{[1, 2, 3, 4, 5, 6].map((i) => (
					<View key={i} style={styles.interestSkeleton} />
				))}
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
		height: 32,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
		marginBottom: 24,
		width: "60%"
	},
	grid: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between"
	},
	interestSkeleton: {
		width: "48%",
		height: 80,
		backgroundColor: "#E0E0E0",
		borderRadius: 12,
		marginBottom: 16
	}
} as const
