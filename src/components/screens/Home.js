import React, { useState, useEffect } from 'react';
import { Title, Card } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Logo from '../shared/logo';
import { Entypo } from '@expo/vector-icons'; 
import theme from '../../theme';

const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View>
                <Entypo name="menu" size={34} color={theme.colors.backgroundWhite} style={styles.hamburguer} onPress={() => navigation.openDrawer()}/>
                <View style={styles.logo}>
                    <Logo/>
                </View>
            </View>
            <View>
                <Title style={styles.title}>DISCOVER</Title>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: theme.colors.backgroundGreen,
    },
    hamburguer: {
        bottom: "240%",
        left: "5%"
    },
    logo: {
        bottom: "280%",
        left: "70%"
    },
    title: {
        fontSize: 20,
        color: theme.colors.backgroundWhite,
        bottom: "800%",
        left: "5%"
    }
})

export default Home;