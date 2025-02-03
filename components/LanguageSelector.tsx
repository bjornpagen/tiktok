"use client"

import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"
import type { LanguageLevel } from "@/server/data/types"
import { useState } from "react"

interface LanguageSelectorProps {
	currentLanguage: string
	languageLevels: LanguageLevel[]
	onLanguageChange: (language: string) => Promise<{ success: boolean }>
}

export default function LanguageSelector({
	currentLanguage,
	languageLevels,
	onLanguageChange
}: LanguageSelectorProps) {
	const [showLanguageModal, setShowLanguageModal] = useState(false)
	const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage)
	const [isChanging, setIsChanging] = useState(false)

	const currentLangDetails = languageLevels.find(
		(lang) => lang.code === selectedLanguage
	)

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

	const renderLanguageOption = (language: LanguageLevel) => {
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
						{language.emoji} {language.name}
					</Text>
				</TouchableOpacity>
			</Link>
		)
	}

	return (
		<View style={styles.section}>
			<Text style={styles.sectionTitle}>Learning Language</Text>
			<TouchableOpacity
				style={styles.languageButton}
				onPress={() => setShowLanguageModal(true)}
			>
				<Text style={styles.languageButtonText}>
					{isChanging
						? "Changing..."
						: `${currentLangDetails?.emoji} ${currentLangDetails?.name}`}
				</Text>
				<Ionicons name="chevron-down" size={16} color="#666" />
			</TouchableOpacity>

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
								{languageLevels.map(renderLanguageOption)}
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
	section: {
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		marginBottom: 16,
		elevation: 2,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333",
		marginBottom: 12
	},
	languageButton: {
		backgroundColor: "#F0F0F0",
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 1,
		borderColor: "#E0E0E0"
	},
	languageButtonText: {
		color: "#333",
		fontSize: 16,
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
