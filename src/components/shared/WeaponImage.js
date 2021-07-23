import React from "react";
import { Image, StyleSheet, View } from "react-native";

const WeaponImage = ({ uuid }) => {

    const renderByWeapon = () => {
        if (uuid === "29a0cfab-485b-f5d5-779a-b59f85e204a8" || uuid === "44d4e95c-4157-0037-81b2-17841bf2e8e3") {
            return(
                <View>
			        <Image
				        style={styles.smallWeapons}
				        source={{
					        uri: `https://media.valorant-api.com/weapons/${uuid}/displayicon.png`,
				        }}
			        />
		        </View>
            )
        } else {
            return(
                <View>
			        <Image
				        style={styles.image}
				        source={{
					        uri: `https://media.valorant-api.com/weapons/${uuid}/displayicon.png`,
				        }}
			        />
		        </View>
            )
        }
    }

	return (
		<View>
            {renderByWeapon()}
        </View>
	);
};

const styles = StyleSheet.create({
	image: {
        top: -30,
		width: 290,
		height: 200,
		alignSelf: "center",
		position: "relative",
		resizeMode: "contain",
	},
    smallWeapons: {
        top: 30,
		width: 200,
		height: 100,
		alignSelf: "center",
		position: "relative",
		resizeMode: "contain",
    }
});

export default WeaponImage;
