import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Title } from 'react-native-paper';
import AgentsCard from './AgentCard';

const AgentList = ({agent}) =>{
    const empyFlatlist = (
        <View>
            <Title>Agent data not found</Title>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data = {agent.data}
                keyExtractor = {(item) => item.id.toString()}
                ListEmptyComponent = {empyFlatlist}
                renderItem = {({item})=>{
                    return(
                        <TouchableOpacity key = {item.id}>
                            <AgentsCard desc = {item.desc} name = {item.name} role = {item.role.displayName} img = {item.fullPortrait} />
                        </TouchableOpacity>
                    )
                }}
            />
                
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        margin: 45
    }
})

export default AgentList;