import React, { useState, useEffect } from 'react';
import { StyleSheet,  View } from 'react-native';
import { Title } from 'react-native-paper';
import { fetchAgents } from '../../api';
import AgentList from '../shared/AgentCardL';
import { Entypo } from '@expo/vector-icons'; 
import theme from '../../theme';
import Logo from '../shared/logo';

const Agents = ({navigation}) => {

    const [agent, setAgent] = useState({});

    const getAgent = async () =>{
        const response = await fetchAgents();

        setAgent(response);
        
    }

    useEffect(() =>{
        getAgent();
    }, [])

    
    return(
        <View style={styles.back}>
            <View>
                <Entypo name="menu" size={34} color={theme.colors.backgroundWhite} style={styles.hamburguer} onPress={() => navigation.openDrawer()}/>
                <View style={styles.logo}>
                    <Logo/>
                </View>
            </View>
            <Title style={styles.title}>AGENTS</Title>
            <AgentList agent={agent} navigation={navigation}/>
        </View>
    );

}

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        color: theme.colors.backgroundWhite,
        bottom: "8%",
        left: "5%",
        position:"relative"
    },
    hamburguer: {
        bottom: "10%",
        left: "5%"
    },
    back: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: theme.colors.backgroundGreen,
    },
    logo: {
        bottom: "50%",
        left:"80%",
        width:1
    }
})

export default Agents;