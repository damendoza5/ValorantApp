import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text } from "react-native-paper";
import AgentImage from '../shared/AgentImage';
import theme from '../../theme';
import { Ionicons } from '@expo/vector-icons'; 

const AgentDetails = ({ route }) => {
    const { item } = route.params;

    return(
        <ScrollView>
            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.back}>
                        <Ionicons 
                            name="chevron-back" 
                            size={24} 
                            color={theme.colors.backgroundWhite} 
                        />
                        <Text style={{color: theme.colors.backgroundWhite}}>Back</Text>
                    </View>
                    <AgentImage image={item.uuid}/>
                    <Text style={styles.name}>{item.name}</Text>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 500,
        width: 430,
        margin: 20,
        backgroundColor: theme.colors.redAccent,
        borderRadius: 50
    },
    name: {
        position: 'relative',
        alignSelf: 'center',
        color: theme.colors.backgroundWhite,
        fontWeight: 'bold',
        fontSize: 23,
    },
    back: {
        position: 'relative',
        alignSelf: 'flex-start'
    }
});

export default AgentDetails;