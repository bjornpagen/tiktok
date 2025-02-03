"use client"

import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function BottomTabBar() {
	return (
		<View style={styles.container}>
			<Link href="/" asChild>
				<TouchableOpacity style={styles.tab}>
					<Ionicons name="play" size={24} color="white" />
					<Text style={styles.tabText}>Feed</Text>
				</TouchableOpacity>
			</Link>

			<Link href="/team" asChild>
				<TouchableOpacity style={styles.tab}>
					<Ionicons name="people" size={24} color="white" />
					<Text style={styles.tabText}>Team</Text>
				</TouchableOpacity>
			</Link>

			<Link href="/create" asChild>
				<TouchableOpacity style={styles.tab}>
					<Ionicons name="trophy" size={24} color="white" />
					<Text style={styles.tabText}>Challenge</Text>
				</TouchableOpacity>
			</Link>

			<Link href="/profile" asChild>
				<TouchableOpacity style={styles.tab}>
					<Ionicons name="person" size={24} color="white" />
					<Text style={styles.tabText}>Profile</Text>
				</TouchableOpacity>
			</Link>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		height: 60,
		backgroundColor: "#000",
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0
	},
	tab: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 8
	},
	tabText: {
		fontSize: 10,
		color: "white",
		marginTop: 3
	}
})
