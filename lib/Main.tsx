import React from "react";

import { useColorScheme } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Router";

export default function App () {
	const colorScheme = useColorScheme();
	const colorCode: "light" | "dark" = colorScheme ?? "light";

	return (
		<SafeAreaProvider>
			<Navigation />
		</SafeAreaProvider>
	)
}