import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, FlatList} from 'react-native';
import Profile from '../components/Profile';
import colors from '../assets/colors/colors';
import {FOODITEMS} from '../data/dummy-data';
import FoodCard from '../components/FoodCard';
import { color } from 'react-native-reanimated';
import { useSelector, useDispatch } from 'react-redux';
import * as foodAction from '../store/food-actions';

const ProfileScreen = props => {
    
    const dispatch=useDispatch()
    const userFoodItems=useSelector(state=>state.food.userEntries)
    console.log(userFoodItems)

    const user=props.navigation.getParam('user')

    useEffect(()=>{
        dispatch(foodAction.loadUserFoods(user.username))
    },[dispatch])

    const editScreenHandler=()=>{
        props.navigation.navigate('AddScreen')
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
                <FoodCard foodData={itemData.item} cardType='profile' clicked={editScreenHandler}/>

            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.screen}>
            <View>
                <Profile user={user}/>
            </View>
            <FlatList 
                numColumns={1} 
                data={userFoodItems} 
                renderItem={renderGridItems}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.addButtonContainer}>
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={()=>{
                        props.navigation.navigate({routeName:'AddScreen', params:{
                            username:user.username,
                            type:'new'
                        }})
                    }}
                    >
                    <Text style={styles.add}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomBar}>
                {/* <Button title="Go to Result" onPress={()=>{
                    props.navigation.navigate('Result')
                }}/> */}

                <TouchableOpacity 
                    style={styles.vote}
                    onPress={()=>{
                        props.navigation.navigate({routeName:'Vote', params:{
                            username:user.username
                        }})  
                    }}
                    >
                    <Text style={styles.text}>Vote</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.result}
                    onPress={()=>{
                        props.navigation.navigate('Result')  
                    }}
                    >
                    <Text style={styles.text}>Result</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

ProfileScreen.navigationOptions={
    headerStyle:{
        backgroundColor:colors.colorPrimary,
    },
    headerTintColor:colors.colorWhite
};


const styles=StyleSheet.create({
    screen:{
        flexDirection:'column',
        backgroundColor:colors.colorWhite,
        position:'relative',
        height:'100%'
    },
    bottomBar:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    vote:{
        padding:20,
        backgroundColor:colors.colorPrimary,
        width:'50%',
        textAlign:'center',
        marginRight:10,
        borderRadius:10
    },
    result:{
        padding:20,
        backgroundColor:colors.colorPrimaryDark,
        width:'50%',
        marginLeft:10,
        borderRadius:10
    },
    text:{
        textAlign:'center',
        color:colors.colorWhite,
        fontWeight:'bold'
    },
    addButtonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    addButton:{
        backgroundColor:colors.colorOrange,
        width:70,
        height:70,
        borderRadius:100,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

    },
    add:{
        fontWeight:'bold',
        fontSize:60,
        color:colors.colorWhite,
    }
})

export default ProfileScreen;
