import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTab from "./BottomTab";

import Dimension from "./Dimension/Dimension";

export default function WindowGenerator () {
	const BottomTabNav = createBottomTabNavigator({
		initialRouteName: "Dimension",
		screens: {
			Dimension: Dimension
		},
		screenOptions: {
			headerShown: false
		},
		backBehavior: "none",
		tabBar: BottomTab
	});

	return BottomTabNav;
}