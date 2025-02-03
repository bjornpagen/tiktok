import { View, StyleSheet } from "react-native"

export default function LoadingChallenges() {
	return (
		<View style={styles.loadingContainer}>
			{[1, 2, 3].map((i) => (
				<View key={i} style={styles.loadingCard} />
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		padding: 16
	},
	loadingCard: {
		height: 160,
		backgroundColor: "#E0E0E0",
		borderRadius: 16,
		marginBottom: 16
	}
})
