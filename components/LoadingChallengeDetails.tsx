import { View, StyleSheet } from "react-native"

export default function LoadingChallengeDetails() {
	return (
		<View style={styles.container}>
			<View style={styles.header} />
			<View style={styles.description} />

			<View style={styles.section}>
				<View style={styles.wordSkeleton} />
				<View style={styles.wordSkeleton} />
				<View style={styles.wordSkeleton} />
			</View>

			<View style={styles.section}>
				<View style={styles.peerSkeleton} />
				<View style={styles.peerSkeleton} />
				<View style={styles.peerSkeleton} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16
	},
	header: {
		height: 32,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
		marginBottom: 16
	},
	description: {
		height: 80,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
		marginBottom: 24
	},
	section: {
		marginBottom: 24
	},
	wordSkeleton: {
		height: 24,
		backgroundColor: "#E0E0E0",
		borderRadius: 8,
		marginBottom: 12
	},
	peerSkeleton: {
		height: 64,
		backgroundColor: "#E0E0E0",
		borderRadius: 12,
		marginBottom: 12
	}
})
