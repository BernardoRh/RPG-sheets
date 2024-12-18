import { ImageBackground } from "react-native";
import { T20Container, Logo, BackgroundImage } from "./styles";

export default function Tormenta20() {
    return(
        <T20Container>
            <Logo source={require("./assets/images/t20_logo.png")}/>
            <BackgroundImage source={require("./assets/images/t20_background.jpg")}/>
        </T20Container>
    )
}