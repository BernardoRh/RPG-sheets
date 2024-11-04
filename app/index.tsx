import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { Text, TextInput, View } from "react-native";

export default function Index() {

  const [characterName, setCharacterName] = React.useState('')

  return (
    <NavigationContainer independent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         <TextInput
          onChangeText={setCharacterName}
          value={characterName}
          placeholder="Nome do Personagem"
        />
        
      </View>
    </NavigationContainer>
  );
}
