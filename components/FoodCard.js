import React from 'react';
import {View, StyleSheet, Image, Text, Button, TouchableOpacity} from 'react-native';
import colors from '../assets/colors/colors';
import {useDispatch } from 'react-redux';
import * as foodAction from '../store/food-actions';

const FoodCard = ({foodData, cardType,clicked}) => {

    const dispatch=useDispatch()

   

    const deleteHandler=(id)=>{
        dispatch(foodAction.deleteItemAction(id))
    }

    const editHandler=(id)=>{
        dispatch(foodAction.editItemAction(id))
        clicked()
    }

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardLeftSection}>
                <View style={styles.imageSection}>
                    <Image source={{uri:foodData.imageURL}} style={styles.imageStyle}/>
                </View>
                <View>
                    <Text style={styles.itemHeading}>{foodData.title}</Text>
                    <Text style={styles.itemDesc}>{foodData.desc}</Text>
                </View>
            </View>

            <View style={styles.cardRightSection}>
                {cardType=='vote' && <View style={styles.actionButton}>
                    <TouchableOpacity style={{...styles.btn,...styles.first}} onPress={()=>clicked(foodData.id, 30)}>
                        <Text style={styles.btnText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.btn,...styles.second}} onPress={()=>clicked(foodData.id, 20)}>
                        <Text style={styles.btnText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.btn,...styles.third}} onPress={()=>clicked(foodData.id, 10)}>
                        <Text style={styles.btnText}>3</Text>
                    </TouchableOpacity>
                </View>}
                {cardType=='profile' && <View style={styles.modifyButtonArea}>
                    <View style={styles.modifyButton}>
                        <TouchableOpacity style={styles.editBtn} onPress={()=>editHandler((foodData.id))}>
                            <Text style={styles.btnText}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.modifyButton}>
                        <TouchableOpacity style={styles.deleteBtn} onPress={()=>deleteHandler(foodData.id)}>
                            <Text style={styles.btnText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    cardContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderColor: colors.colorGreyLight,
        paddingBottom:15,
        paddingTop:15,
        paddingLeft:20,
        paddingRight:20,
    },
    cardLeftSection:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    itemHeading:{
        color:colors.colorPrimaryDark,
        fontWeight:'bold',
        fontSize:20,
        marginBottom:10
    },
    itemDesc:{
        color:colors.colorOrange,
        fontWeight:'bold',
        fontSize:12
    },
    imageSection:{
        width:90,
        height:90,
        padding:15,
        backgroundColor:colors.colorSecondaryLight,
        borderRadius:30,
        marginRight:15
    },
    imageStyle:{
        width:'100%',
        height:'100%'
    },
    actionButton:{
        flexDirection:'column',
    },
    first:{
        backgroundColor:colors.colorGreyLight,
    },
    second:{
        backgroundColor:colors.colorGreyLight,
    },
    third:{
        backgroundColor:colors.colorGreyLight,
    },
    btn:{
        width:30,
        height:30,
        padding:5,
        borderRadius:100,
        fontWeight:'bold',
        marginBottom:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        fontWeight:'bold',
        color:colors.colorPrimaryDark
    },
    modifyButtonArea:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        flex:1
    },
    modifyButton:{
        marginRight:5,
    },
    editBtn:{
        backgroundColor:colors.colorThird,
        padding:5,
        borderRadius:5
    },
    deleteBtn:{
        backgroundColor:colors.colorSecond,
        padding:5,
        borderRadius:5
    }
})

export default FoodCard;
