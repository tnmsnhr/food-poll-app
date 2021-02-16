import React from 'react';
import colors from '../assets/colors/colors';
import {View, Text, StyleSheet} from 'react-native';


const FoodDetailsScreen = props => {
    const foodItem=props.navigation.getParam('foodItem')
    return (
        <View style={styles.screen}>
            <Text>{foodItem.username}</Text>
        </View>
    )
}

FoodDetailsScreen.navigationOptions=(navigationItem)=>{

    const foodItem=navigationItem.navigation.getParam('foodItem')

    return {
        headerTitle:foodItem.title,
        headerStyle:{
            backgroundColor:colors.colorPrimary,
        },
        headerTintColor:colors.colorWhite
    }

};

const styles=StyleSheet.create({
    screen:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex: 1
    }
})

export default FoodDetailsScreen;
