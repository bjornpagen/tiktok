"use client"

import { View, Text, TouchableOpacity } from "react-native"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function BottomTabBar() {
	return (
		<View style={styles.container}>
			<Link href="/" asChild>
				<TouchableOpacity style={styles.tab}>
					<Ionicons name="home" size={28} color="white" />
					<Text style={styles.tabText}>Home</Text>
				</TouchableOpacity>
			</Link>

			<Link href="/challenges" asChild>
				<TouchableOpacity style={styles.tab}>
					<Ionicons name="trophy" size={28} color="white" />
					<Text style={styles.tabText}>Challenges</Text>
				</TouchableOpacity>
			</Link>

			<Link href="/interests" asChild>
				<TouchableOpacity style={styles.tab}>
					<Ionicons name="heart" size={28} color="white" />
					<Text style={styles.tabText}>Interests</Text>
				</TouchableOpacity>
			</Link>

			<Link href="/profile" asChild>
				<TouchableOpacity style={styles.tab}>
					<Ionicons name="person" size={28} color="white" />
					<Text style={styles.tabText}>Profile</Text>
				</TouchableOpacity>
			</Link>
		</View>
	)
}

const styles = {
	container: {
		flexDirection: "row" as const,
		height: 70,
		backgroundColor: "#6B4EFF",
		position: "absolute" as const,
		bottom: 0,
		left: 0,
		right: 0,
		borderTopWidth: 2,
		borderTopColor: "#8B6FFF",
		paddingBottom: 8
	},
	tab: {
		flex: 1,
		justifyContent: "center" as const,
		alignItems: "center" as const,
		paddingVertical: 8
	},
	tabText: {
		fontSize: 12,
		fontWeight: "600" as const,
		color: "white",
		marginTop: 4
	}
}
