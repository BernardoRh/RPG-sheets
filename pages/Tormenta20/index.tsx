import { StyleSheet } from "react-native";
import { T20Container, Logo, BackgroundImage } from "./styles";
import React from "react";

export default function Tormenta20() {

    const [T20ContainerHover, setT20ContainerHover] = React.useState(false)

    function mouseLeavedT20Container(){
        setT20ContainerHover(false)
    }
    function mouseEnteredT20Container(){
        setT20ContainerHover(true)
    }

    return(
        <T20Container
            onMouseEnter={mouseEnteredT20Container}
            onMouseLeave={mouseLeavedT20Container}
            style={T20ContainerHover ? styles.T20ContainerStyles : ""}
        >
            <Logo source={require("./assets/images/t20_logo.png")}/>
            <BackgroundImage source={require("./assets/images/t20_background.jpg")} />
        </T20Container>
    )
}

const styles = StyleSheet.create({
    T20ContainerStyles: {
    }
})