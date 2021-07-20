import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import getEnvVars from '../../../environment';

const {imageUrl} = getEnvVars();

const AgentImage = ({uuid}) => {
    return (
        <View>
            <Image style={ styles.image }  
            source = {{
                uri : `${imageUrl}${uuid}/fullportrait.png`}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400,
        alignSelf:"center",
        position: 'relative',
        resizeMode:"contain",
    },
});

export default AgentImage;