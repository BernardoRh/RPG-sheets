import Tormenta20 from "@/pages/Tormenta20";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { TextInput, View } from "react-native";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavigationContainer independent={true}>
          <Tormenta20/>
      </NavigationContainer>
    </View>

  );
}
