import React,{useState} from 'react'
import { Button, View,Text, StyleSheet, Image, Alert } from 'react-native';
import * as imgPicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

const ImagePicker = props => {

    const [pickedImage, setPickedImage]=useState()

    const getPermissions=async ()=>{
        const result=await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
        if(result.status !=='granted'){
            Alert.alert(
                'Insufficient permissions!',
                'You need to grant permissions to use this app',
                [{text:'Okay'}]
            )
            return false
        }
        return true;
    }

    const imageHandler=async ()=>{

        const hasPermissions=await getPermissions()   
        if(!hasPermissions){
            return;
        }

        const image=await imgPicker.launchCameraAsync({
            allowsEditing:true,
            aspect:[1,1],
            quality:0.3
        });
        
        setPickedImage(image.uri)

        props.onImageTaken(image.uri)

    }

    return (
        <View>
            <View>
                {pickedImage ? <Image source={{uri:pickedImage}} style={styles.imagePreview}/>
                :<Text>No image Available</Text>}
            </View>
            <View>
                <Button title="Take Photo" onPress={imageHandler}/>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    imagePreview:{
        width:200,
        height:200
    }
})

export default ImagePicker
