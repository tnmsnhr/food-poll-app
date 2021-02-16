import React,{useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Image} from 'react-native';
import {FOODITEMS} from '../data/dummy-data';
import colors from '../assets/colors/colors';
import FoodCard from '../components/FoodCard';
import image1 from '../assets/images/image1.png';
import * as foodAction from '../store/food-actions';
import {useDispatch, useSelector} from 'react-redux';


let VoteScreen = props => {

    const dispatch=useDispatch()
    const foodItems=useSelector(state=>state.food.foodItems)
    const votingEntries=useSelector(state=>state.food.votingEntries)

    useEffect(()=>{
        dispatch(foodAction.loadAllFoods())
    },[dispatch])

    const voteHandler=(id,vote)=>{
        dispatch(foodAction.voteAction(id,vote))
        console.log(votingEntries)
    }

    const renderGridItems=itemData=>{
        return (
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate({
                    routeName:'FoodDetails',
                    params:{
                        foodItem: itemData.item
                    }
                })
            }}>
                <FoodCard foodData={itemData.item} cardType='vote' clicked={voteHandler}/>

            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.voteContainer}>
            <View style={styles.voteHeader}>
                <View style={styles.food}>
                    <Image source={image1} style={styles.imageStyle}/>
                    <Text style={styles.heading}>Vote for food</Text>
                    <Text style={styles.subHeading}>Open till 25th Feb</Text>
                </View>
            </View>
            <FlatList 
                numColumns={1} 
                data={foodItems} 
                renderItem={renderGridItems}
                showsVerticalScrollIndicator={false}
                />
        </View>
    )
}

VoteScreen.navigationOptions={
    headerTitle:'Submit your vote',
    headerStyle:{
        backgroundColor:colors.colorPrimary,
    },
    headerTintColor:colors.colorWhite
};

const styles=StyleSheet.create({
    voteContainer:{
        flexDirection:'column',
        // justifyContent:'center',
        // alignItems:'center',
        flex: 1,
        backgroundColor:colors.colorWhite,
    },
    voteHeader:{
        backgroundColor:colors.colorPrimary,
        width:'100%',
        height:200,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        padding:20,
    },
    food:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        flex:1,
    },
    imageStyle:{
        width:100,
        height:100,
    },
    heading:{
        color:colors.colorWhite,
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:20,
        padding:10,
    },
    subHeading:{
        color:colors.colorOrange,
        fontWeight:'bold',
    }
})

export default VoteScreen;
