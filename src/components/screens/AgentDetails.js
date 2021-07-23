import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, View, Dimensions} from 'react-native';
import { Title, Card, Text} from "react-native-paper";
import AgentImage from '../shared/AgentImage';
import theme from '../../theme';
import { Ionicons } from '@expo/vector-icons'; 
import AbilityInfo from '../shared/AbilityInfo';

const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;

const AgentDetails = ({ route, navigation }) => {
    const { item } = route.params;

    const abilities = item.abilities;
    const role = item.role;

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
                    <AgentImage uuid={item.uuid}/>
                    <Text style={styles.name}>{item.displayName.toUpperCase()}</Text>
                    <Text style={styles.role}>{role.displayName.toUpperCase()}</Text>
                </Card.Content>
            </Card>
            <Title style={styles.desc}>
                DESCRIPTION:
            </Title>
            <Text style={styles.descText}>
                {item.description}
            </Text>
            <Title style={styles.abili}>
                ABILITIES:
            </Title>
            <View style={styles.abilities}>
                <View style={styles.abilitiesC}>
                    {abilities.map(ability => 
                    <AbilityInfo 
                        key={ability.uuid} 
                        displayName={ability.displayName} 
                        description={ability.description}
                        uuid={item.uuid}
                        slot={ability.slot}
                    />
                    )}
                </View>
            </View>
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
        fontWeight: 'bold',
        fontSize: 23,
    },
    role: {
        position: 'relative',
        alignSelf: 'center',
        color: theme.colors.backgroundWhite,
        fontSize: 14,
    },
    back: {
        marginTop: "17%",
        position: 'relative',
        alignSelf: 'flex-start',
        flexDirection: 'row'
    },
    desc: {
        marginTop: "2%",
        marginLeft: "5%",
        fontSize: 16,
        color: theme.colors.backgroundWhite
    },
    descText: {
        marginHorizontal: "5%",
        color: theme.colors.backgroundWhite
    },
    abili: {
        marginTop: "10%",
        marginLeft: "5%",
        fontSize: 16,
        color: theme.colors.backgroundWhite
    },
});

export default AgentDetails;