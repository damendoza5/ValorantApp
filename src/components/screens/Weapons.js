import React, { useState, useEffect } from 'react';
import { StyleSheet,  View, Dimensions } from 'react-native';
import { Title } from 'react-native-paper';
import { fetchWeapons } from '../../api';
import WeaponList from '../shared/WeaponCardL';
import { Entypo } from '@expo/vector-icons'; 
import theme from '../../theme';
import Logo from '../shared/logo';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const Weapons = ({ navigation }) => {

    const [weapon, setWeapon] = useState({});

    const getWeapon = async () =>{
        const response = await fetchWeapons();

        setWeapon(response);
        
    }

    useEffect(() =>{
        getWeapon();
    }, [])

    
    return(
        <View style={styles.back}>
            <View>
                <Entypo name="menu" size={34} color={theme.colors.backgroundWhite} style={styles.hamburguer} onPress={() => navigation.openDrawer()}/>
                <View style={styles.logo}>
                    <Logo/>
                </View>
            </View>
            <Title style={styles.title}>WEAPONS</Title>
            <WeaponList weapon={weapon} navigation={navigation}/>
        </View>
    );

}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        color: theme.colors.backgroundWhite,
        top: deviceHeight*0.08,
        left: deviceWidth*0.07,
    },
    hamburguer: {
        bottom: deviceHeight*-0.15,
        left: deviceWidth*0.05
    },
    back: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: theme.colors.backgroundGreen,
    },
    logo: {
        bottom: deviceHeight*-0.1,
        left: deviceWidth*0.75,
        width:1
    }
})

export default Weapons;