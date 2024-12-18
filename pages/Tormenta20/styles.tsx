import { Button } from "react-native"
import styled from "rn-css"

export const T20Container = styled.View`
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s;
`
export const Logo = styled.Image`
    width: 15rem;
    height: 18rem;
    resizeMode: contain;
    position: absolute;
    z-index: 1;
    transition: 0.3s;
    &:hover{
        width: 16rem;
    }
`

export const BackgroundImage = styled.Image`
    width: 18rem;
    height: 18rem;
    border-radius: 16px;
    transition: 0.3s;
    
`