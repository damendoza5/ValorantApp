import React from 'react';
import { StyleSheet, View, Text }from 'react-native'
import { Card } from 'react-native-paper'

const AgentsCard = ({name, desc, role, img}) => {
    
    return(
        <Card style = {styles.container}>
            <Card.Title title = {name}/>
            <Card.Content>
                <View>
                    {role && [role].map((rol) => {
                        <Text>{rol.displayName}</Text>
                    })}
                    <Text>{desc}</Text>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'auto',
        margin: 20
    },
    img:{
        height:400,
        width: 200
    },
});

export default AgentsCard;