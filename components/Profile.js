import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../assets/colors/colors';
import avatar from '../assets/images/avatar.png';

const Profile = (props) => {
    return (
        <View style={styles.profileContainer}>
            <View style={styles.profileHeader}>
                <View style={styles.avatarContainer}>
                    <Image source={avatar} style={styles.avatar}/>
                </View>
                <Text style={styles.name}>{props.user.name}</Text>
                <Text style={styles.username}>{props.user.username}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    profileContainer:{
        backgroundColor:colors.colorPrimary,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
    },
    profileHeader:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:20
    },
    avatarContainer:{
        width:150,
        height:150,
    },
    avatar:{
        width:'100%',
        height:'100%'
    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.colorWhite,
    },
    username:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.colorOrange,
    }
})

export default Profile
