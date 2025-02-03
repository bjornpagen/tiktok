"use client"

import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Modal,
	Platform
} from "react-native"
import type { UserProfile } from "@/server/data/profile"
import StatsGrid from "./StatsGrid"
import { useState } from "react"
import { Link } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

interface ProfileStatsProps {
	stats: UserProfile["stats"]
	currentLanguage: string
	availableLanguages: UserProfile["availableLanguages"]
	onLanguageChange: (code: string) => Promise<{ success: boolean }>
}

export default function ProfileStats({
	stats,
	currentLanguage,
	availableLanguages,
	onLanguageChange
}: ProfileStatsProps) {
	const [showLanguageModal, setShowLanguageModal] = useState(false)
	const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage)
	const [isChanging, setIsChanging] = useState(false)

	const currentLanguageName =
		availableLanguages.find((lang) => lang.code === selectedLanguage)?.name ||
		"Unknown"

	const handleLanguageSelect = async (code: string) => {
		setIsChanging(true)
		try {
			await onLanguageChange(code)
			setSelectedLanguage(code)
		} finally {
			setIsChanging(false)
			setShowLanguageModal(false)
		}
	}

	const renderLanguageOption = (
		language: UserProfile["availableLanguages"][0]
	) => {
		const isSelected = language.code === selectedLanguage
		return (
			<Link
				key={language.code}
				href={{
					pathname: "/profile",
					params: { lang: language.code }
				}}
				asChild
			>
				<TouchableOpacity
					style={isSelected ? styles.selectedOption : styles.option}
					disabled={isChanging}
					onPress={() => handleLanguageSelect(language.code)}
				>
					<Text
						style={isSelected ? styles.selectedOptionText : styles.optionText}
					>
						{language.name}
					</Text>
				</TouchableOpacity>
			</Link>
		)
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.sectionTitle}>Your Stats</Text>
				<TouchableOpacity
					style={styles.languageButton}
					onPress={() => setShowLanguageModal(true)}
				>
					<Text style={styles.languageButtonText}>
						{isChanging ? "Changing..." : `Learning ${currentLanguageName}`}
					</Text>
					<Ionicons name="chevron-down" size={16} color="#666" />
				</TouchableOpacity>
			</View>

			<StatsGrid stats={stats} />

			<Modal
				visible={showLanguageModal}
				transparent
				animationType="fade"
				onRequestClose={() => setShowLanguageModal(false)}
			>
				<TouchableOpacity
					style={styles.modalContainer}
					activeOpacity={1}
					onPress={() => setShowLanguageModal(false)}
				>
					<View>
						<TouchableOpacity
							style={styles.modalContent}
							activeOpacity={1}
							onPress={(e) => e.stopPropagation()}
						>
							<Text style={styles.modalTitle}>Select Language</Text>
							<View style={styles.optionsList}>
								{availableLanguages.map(renderLanguageOption)}
							</View>
							<TouchableOpacity
								style={styles.closeButton}
								onPress={() => setShowLanguageModal(false)}
							>
								<Text style={styles.closeButtonText}>Cancel</Text>
							</TouchableOpacity>
						</TouchableOpacity>
					</View>
				</TouchableOpacity>
			</Modal>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 16,
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.05,
		shadowRadius: 8,
		...Platform.select({
			android: {
				elevation: 2
			}
		})
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 16
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333"
	},
	languageButton: {
		backgroundColor: "#F0F0F0",
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 16,
		minWidth: 140,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 4,
		borderWidth: 1,
		borderColor: "#E0E0E0"
	},
	languageButtonText: {
		color: "#666",
		fontSize: 14,
		fontWeight: "500"
	},
	modalContainer: {
		flex: 1,
		justifyContent: "flex-end",
		backgroundColor: "rgba(0,0,0,0.5)"
	},
	modalContent: {
		backgroundColor: "white",
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		padding: 20
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: "600",
		marginBottom: 16,
		textAlign: "center"
	},
	optionsList: {
		gap: 8
	},
	option: {
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 8,
		backgroundColor: "#F0F0F0"
	},
	selectedOption: {
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 8,
		backgroundColor: "#007AFF"
	},
	optionText: {
		fontSize: 16,
		color: "#333"
	},
	selectedOptionText: {
		fontSize: 16,
		color: "white"
	},
	closeButton: {
		marginTop: 16,
		paddingVertical: 12,
		alignItems: "center"
	},
	closeButtonText: {
		color: "#666",
		fontSize: 16
	}
})
