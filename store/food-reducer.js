import { ADD_FOODITEM, FETCH_ALL_FOODS, FETCH_USER_FOODS, DELETE_ITEM, EDIT_ITEM, VOTE_COUNT } from './food-actions';

const initialState={
    foodItems:[],
    userEntries:[],
    editing:false,
    selectedItem:{},
    votingEntries:[]
};

export default (state=initialState, action)=>{

    switch(action.type){

        case ADD_FOODITEM:
            const updatedFood=[...state.foodItems,action.foodData]
            const updatedUserEntries=[...state.userEntries,action.foodData]
            return {
                ...state,
                userEntries:updatedUserEntries,
                foodItems:updatedFood
            }
        
        case FETCH_ALL_FOODS:
            return {
                ...state,
                foodItems:action.foodItems
            }

        case FETCH_USER_FOODS:
            return {
                ...state,
                userEntries:action.userFoodItems
            }

        case EDIT_ITEM:
            const selectedItem=[...state.userEntries].filter(item=> {
                return item.id==action.itemId
            })[0]

            console.log(selectedItem)
            return {
                ...state,
                selectedItem:selectedItem,
                editing:false
            }

        case VOTE_COUNT:
            const votedItem=[...state.foodItems].filter(item=>{
                return item.id==action.itemId
            })[0]
            const entries=[...state.votingEntries]
            let match=false;
            if(entries.length>0){
                entries.forEach(item=>{
                    if(item.id==action.itemId){
                        match=true
                    }
                })

                if(!match){
                    entries.push(votedItem)
                }else {
                    entries.pop()
                }
            }
            

            return {
                ...state,
                votingEntries:entries
            }

        case DELETE_ITEM:
            const updatedState=[...state.userEntries]

            const newuserEntries=updatedState.filter((item)=>{
                return action.deletedId!=item.id
            })
            return {
                ...state,
                userEntries:newuserEntries
            }

        default:
            return state

    }
}