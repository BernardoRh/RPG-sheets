import React from "react"
import { TextInput } from "react-native"

export default function CharacterCreator() {


const [characterName, setCharacterName] = React.useState('')

    function HandleNameChange(name: string){
        setCharacterName(name)
    }

    return(
        <TextInput
            onChangeText={HandleNameChange}
            value={characterName}
            placeholder="Nome do Personagem"
        />
    )
}