import { React, useState, useEffect } from 'react';
import { StyleSheet,  View } from 'react-native';
import { Title } from 'react-native-paper';
import { fetchAgents } from '../../../api';
import AgentList from '../shared/AgentCardL';

const Agents = ({navigation}) => {

    const [agent, setAgent] = useState({});

    const getAgent = async () =>{
        const response = await fetchAgents();

        setAgent(response)
    }

    useEffect(() =>{
        getAgent
    }, [])

  
    return(
        <View>
            <Title style={styles.title}> Agents </Title>
            {agent.status && <AgentList agent={agent} /> }
        </View>
    );

}

const styles = StyleSheet.create({
    title:{
        fontSize: 28,
    }
})

export default Agents;