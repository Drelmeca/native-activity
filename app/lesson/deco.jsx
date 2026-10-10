import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const links = ['Home', 'Profile', 'Friends', 'Settings'];

export default function Deco() {
	return (
		<View style={styles.sidebar}>
			<Pressable
				accessibilityRole="button"
				accessibilityLabel="Menu"
				onPress={() => {}}
				style={({ hovered }) => [styles.menuButton, hovered && styles.hovered]}
			>
				{[0, 1, 2].map((line) => (
					<View key={line} style={styles.line} />
				))}
			</Pressable>

			<View style={styles.links}>
				{links.map((label) => (
					<Pressable
						key={label}
						accessibilityRole="button"
						onPress={() => {}}
						style={({ hovered }) => [styles.link, hovered && styles.hovered]}
					>
						<Text style={styles.linkText}>{label}</Text>
					</Pressable>
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	sidebar: {
		width: 240,
		flex: 1,
		padding: 16,
		backgroundColor: '#fff',
		borderRightWidth: 1,
		borderRightColor: '#ddd',
	},
	menuButton: {
		width: 44,
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
	line: {
		width: 22,
		height: 2,
		marginVertical: 2,
		backgroundColor: '#222',
	},
	links: {
		marginTop: 20,
	},
	link: {
		paddingVertical: 12,
		paddingHorizontal: 14,
		borderRadius: 8,
	},
	hovered: {
		backgroundColor: '#e5e5e5',
	},
	linkText: {
		color: '#222',
		fontSize: 16,
	},
});
