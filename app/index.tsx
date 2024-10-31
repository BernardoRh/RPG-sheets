import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </NavigationContainer>
  );
}
