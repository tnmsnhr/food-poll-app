import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ResultScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The ResultScreen..!</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex: 1
    }
})

export default ResultScreen;
