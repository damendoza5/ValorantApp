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
        <View >
            <FlatList
                data = {agent.data}
                keyExtractor = {(item) => item.uuid.toString() }
                showsHorizontalScrollIndicator={true}
                ListEmptyComponent = {empyFlatlist}
                renderItem = {({item})=>{
                    return(
                        <TouchableOpacity key = {item.uuid}>
                            <AgentsCard desc = {item.description} name = {item.displayName} role = {item.role} img = {item.fullPortrait} />
                        </TouchableOpacity>
                    )
                }}
            />
                
            
        </View>
    )
}

const styles = StyleSheet.create({
   
})

export default AgentList;