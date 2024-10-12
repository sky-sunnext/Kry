module.exports = {
	presets: [
		'module:@react-native/babel-preset'
	],
	plugins: [
		"react-native-reanimated/plugin",
		"react-native-worklets-core/plugin",
		[ "@babel/plugin-proposal-decorators", { version: "legacy" } ],
		"nativewind/babel"
	]
};
