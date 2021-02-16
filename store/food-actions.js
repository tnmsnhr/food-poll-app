import * as FileSystem from 'expo-file-system';
import {insertFood, fetchAllFood, fetchUserFood, deleteFoodItem, updateFoodPoints} from '../helpers/db';

export const ADD_FOODITEM='ADD_FOODITEM';
export const FETCH_ALL_FOODS='FETCH_ALL_FOODS';
export const FETCH_USER_FOODS='FETCH_USER_FOODS';
export const DELETE_ITEM='DELETE_ITEM';
export const VOTE_COUNT='VOTE_COUNT';

export const addFoodItem=(item)=>{
    return async dispatch=>{
        const fileName=item.imageURL.split('/').pop()
        const newPath=FileSystem.documentDirectory+fileName;


        try{
            await FileSystem.moveAsync({
                from:item.imageURL,
                to:newPath
            })
            const dbResult=await insertFood(item.title, item.desc, item.imageURL, item.username, item.points)
            console.log(dbResult)
            dispatch({type:ADD_FOODITEM,foodData: {...item,imageURL:newPath,id:dbResult.insertId}})

        }catch(err){
            console.log(err)
        }
    }
}

export const loadAllFoods=()=>{
    return async dispatch=>{
        try{
            const dbResult=await fetchAllFood();
            dispatch({type:FETCH_ALL_FOODS,foodItems:dbResult.rows._array})
        }catch(err){
            console.log(err)
        }
    }
}

export const loadUserFoods=username=>{
    return async dispatch=>{
        try{
            const dbResult=await fetchUserFood(username);
            dispatch({type:FETCH_USER_FOODS,userFoodItems:dbResult.rows._array})
        }catch(err){
            console.log(err)
        }
    }
}

export const deleteItemAction=itemid=>{
    return async dispatch=>{
        try{
            const dbResult=await deleteFoodItem(itemid);
            dispatch({type:DELETE_ITEM,deletedId:itemid})
        }catch(err){
            console.log(err)
        }
    }
}

export const editItemAction=itemid=>{
    return {
        type:EDIT_ITEM,
        itemId:itemid
    }
}

export const voteAction=(itemid,vote)=>{
    return async dispatch=>{
        try{
            const dbResult=await updateFoodPoints(itemid,vote);
            dispatch({type:VOTE_COUNT,itemid:itemid})
        }catch(err){
            console.log(err)
        }
    }
}