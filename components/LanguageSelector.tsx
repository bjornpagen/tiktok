"use client"

import { View, Text, TouchableOpacity } from "react-native"
import type { LanguageLevel } from "@/types/profile"
import { useState } from "react"

interface LanguageSelectorProps {
	currentLanguage: string
	languageLevels: LanguageLevel[]
	onLanguageChange: (code: string) => Promise<void>
}

export default function LanguageSelector({
	currentLanguage: initialLanguage,
	languageLevels,
	onLanguageChange
}: LanguageSelectorProps) {
	// Local state to handle immediate UI updates
	const [currentLanguage, setCurrentLanguage] = useState(initialLanguage)
	const [isChanging, setIsChanging] = useState(false)

	const handleLanguageChange = async (code: string) => {
		if (isChanging || code === currentLanguage) {
			return
		}

		try {
			setIsChanging(true)
			await onLanguageChange(code)
			setCurrentLanguage(code)
		} catch (error) {
			console.error("Failed to change language:", error)
			// You might want to show an error message to the user here
		} finally {
			setIsChanging(false)
		}
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>Learning Language</Text>
			<View style={styles.languageGrid}>
				{languageLevels.map((lang) => (
					<TouchableOpacity
						key={lang.code}
						style={[
							styles.languageButton,
							currentLanguage === lang.code && styles.selectedLanguage,
							isChanging && styles.disabledButton
						]}
						onPress={() => handleLanguageChange(lang.code)}
						disabled={isChanging}
					>
						<Text style={styles.languageEmoji}>{lang.emoji}</Text>
						<Text
							style={[
								styles.languageName,
								currentLanguage === lang.code && styles.selectedLanguageText
							]}
						>
							{lang.name}
						</Text>
						<View style={styles.levelBadge}>
							<Text style={styles.levelText}>Lvl {lang.level}</Text>
						</View>
					</TouchableOpacity>
				))}
			</View>
		</View>
	)
}

const styles = {
	container: {
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		marginVertical: 8,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.05,
		shadowRadius: 4,
		elevation: 3
	},
	label: {
		fontSize: 16,
		fontWeight: "600",
		color: "#333",
		marginBottom: 12
	},
	languageGrid: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 8
	},
	languageButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#F5F7FA",
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#E4E9F0",
		minWidth: "48%",
		gap: 8
	},
	selectedLanguage: {
		backgroundColor: "#EBF5FF",
		borderColor: "#2196F3"
	},
	languageEmoji: {
		fontSize: 20
	},
	languageName: {
		fontSize: 14,
		color: "#4A5568",
		flex: 1
	},
	selectedLanguageText: {
		color: "#2196F3",
		fontWeight: "500"
	},
	levelBadge: {
		backgroundColor: "#E2E8F0",
		paddingHorizontal: 6,
		paddingVertical: 2,
		borderRadius: 4
	},
	levelText: {
		fontSize: 12,
		color: "#4A5568",
		fontWeight: "500"
	},
	disabledButton: {
		opacity: 0.6
	}
} as const
