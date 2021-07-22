import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, Text } from 'react-native-paper';
import theme from '../../theme';

const AbilityInfo = ({ displayName, description }) => {

    return (
        <View style={styles.container}>
            <Title style={styles.title}>
                {displayName}
            </Title>
            <Text style={styles.text}>
                {description}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        marginVertical: 19,
        marginRight: 130
    },
    title: {
        color: theme.colors.backgroundWhite,
        fontSize: 14
    },
    text: {
        color: theme.colors.backgroundWhite,
        fontSize: 12,
        marginTop: -8
    }
});

export default AbilityInfo;