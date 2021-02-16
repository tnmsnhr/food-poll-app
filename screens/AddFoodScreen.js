import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../assets/colors/colors';
import * as actions from '../store/food-actions';
import ImagePicker from '../components/ImagePicker';
import { useSelector, useDispatch } from 'react-redux';

const AddFoodScreen = props => {
    const [title, setTitle]=useState();
    const [desc, setDesc]=useState();
    const [imageURL, setImageURL]=useState()

    const dispatch=useDispatch()
    const username=props.navigation.getParam('username')
    const type=props.navigation.getParam('type')
    const userFoodItems=useSelector(state=>state.food.userEntries)
    const selectedItem=useSelector(state=>state.food.selectedItem)

    const addFoodHandler=()=>{
        const foodItem={
            title,
            desc,
            imageURL:imageURL,
            username:username,
            points:0
        }
        dispatch(actions.addFoodItem(foodItem))
        props.navigation.goBack()
    }

  if(selectedItem){

  }

    const imageTakenHandler=imagePath=>{
        setImageURL(imagePath)
    }

    const updateHandler=()=>{

    }


    return (
        <View>
            <View style={styles.inputArea}>
                <TextInput placeholder="add title" style={styles.input} onChangeText={input=>setTitle(input)} value={title}/>
                <TextInput placeholder="add description" style={styles.input} onChangeText={input=>setDesc(input)} value={desc}/>
                {/* <TextInput placeholder="add description" multiline={true} numberOfLines={4} style={styles.input}/> */}
                
            </View>
            <ImagePicker onImageTaken={imageTakenHandler}/>

            {type=='new' ? <Button title="Add Food" onPress={addFoodHandler}/>:<Button title="Update" onPress={updateHandler}/>}
        </View>
    )
}

const styles=StyleSheet.create({
    inputArea:{
        marginBottom:20,
        backgroundColor:colors.colorWhite,
        padding:30,
    },
    input:{
        padding:20,
        borderColor:'#ededed',
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:10,
        marginBottom:20
    },
})

export default AddFoodScreen
