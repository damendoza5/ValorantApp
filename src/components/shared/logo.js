import React from "react";
import { Image } from "react-native";

const Logo = () => {
    return (
        <Image
            style={{width: 80, height: 80, left: 30}}
            source={require('../../../assets/radianite-logo.png')}
        />
    )
}

export default Logo;