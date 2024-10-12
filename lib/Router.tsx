import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WindowGenerator from "./pages/window/Window";

export default function Navigation() {
	const Stack = createNativeStackNavigator({
		screens: {
			Window: WindowGenerator()
		}
	});

	const StaticNav = createStaticNavigation(Stack);

	return <StaticNav />;
}