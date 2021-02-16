import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput, TouchableHighlight,ScrollView } from 'react-native-gesture-handler';
import {USERS} from '../data/dummy-data';

const LoginScreen = props => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    const inputUsernameHandler=inputText=>{
        setUsername(inputText)
    }

    const inputPasswordHandler=inputText=>{
        setPassword(inputText)
    }

    const submitHandler=()=>{

        USERS.forEach(user=>{
            if(user.username==username && user.password==password){
                props.navigation.replace({
                    routeName:'Profile',
                    params:{
                        user:user
                    }
                })
            }
        })

    }

    return (
        <View style={styles.screen}>
            <View style={styles.loginContainer}>
                <View style={styles.inputArea}>
                    <TextInput style={styles.input} placeholder="enter your username" onChangeText={inputUsernameHandler}/>
                    <TextInput style={styles.input} placeholder="enter your password" onChangeText={inputPasswordHandler}/>
                </View>
                <View style={styles.buttonArea}>
                    {/* <TouchableHighlight style={styles.loginBtn}></TouchableHighlight> */}
                        <Button title="Login" onPress={submitHandler}
                        style={{fontWeight:'bold',color:'#fff'}}
                        />
                    
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
        backgroundColor:'#4B38D3'
    },
    loginContainer:{
        backgroundColor:'#fff',
        width:'90%',
        padding:20,
        borderRadius:20
    },
    inputArea:{
        marginBottom:20
    },
    input:{
        padding:20,
        borderColor:'#ededed',
        borderStyle:'solid',
        borderWidth:1,
        borderRadius:10,
        marginBottom:20
    },
    buttonArea:{
        width:'100%',
        
    },
    loginBtn:{
        backgroundColor:'#4B38D3',
        borderRadius:10,
        padding:10,
        fontFamily:'nexa-bold'
    }
})

export default LoginScreen;
