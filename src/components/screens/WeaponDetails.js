import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Dimensions} from 'react-native';
import { Title, Card, Text} from "react-native-paper";
import WeaponImage from '../shared/WeaponImage';
import theme from '../../theme';
import { Ionicons } from '@expo/vector-icons'; 

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const WeaponDetails = ({ route, navigation }) => {
    const { item } = route.params;

    return(
        <ScrollView style={styles.container} bounces={false}>
            <Card style={styles.card}>
                <Card.Content>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <Ionicons 
                            name="chevron-back" 
                            size={24} 
                            color={theme.colors.backgroundWhite}
                        />
                        <Text style={{color: theme.colors.backgroundWhite, fontSize: 20}}>Back</Text>
                    </TouchableOpacity>
                    <WeaponImage uuid={item.uuid}/>
                    <Title style={styles.name}>{item.displayName.toUpperCase()}</Title>
                </Card.Content>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundGreen
    },
    card: {
        marginHorizontal: 5,
        marginTop: deviceWidth*-0.11,
        height: deviceHeight*0.7,
        width: deviceWidth*1,
        margin: 20,
        backgroundColor: theme.colors.redAccent,
        borderRadius: 50
    },
    name: {
        position: 'relative',
        alignSelf: 'center',
        color: theme.colors.backgroundWhite,
        fontSize: 23,
    },
    back: {
        marginTop: "17%",
        position: 'relative',
        alignSelf: 'flex-start',
        flexDirection: 'row'
    },
});

export default WeaponDetails;