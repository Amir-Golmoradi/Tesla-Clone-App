import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const _layout = ({ children }) => {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#161818" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
      </Stack>
      <StatusBar style="light" />
    </>
  );
};

export default _layout;
