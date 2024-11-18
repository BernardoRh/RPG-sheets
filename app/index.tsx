import CharacterCreator from "@/pages/CharacterCreator";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { TextInput, View } from "react-native";

export default function Index() {

  return (
    <NavigationContainer independent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CharacterCreator/>
      </View>
    </NavigationContainer>
  );
}
