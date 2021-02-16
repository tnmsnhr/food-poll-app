import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import ProfileScreen from '../screens/ProfileScreen';
import ResultScreen from '../screens/ResultScreen';
import VoteScreen from '../screens/VoteScreen';
import LoginScreen from '../screens/LoginScreen';
import FoodDetailsScreen from '../screens/FoodDetailsScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import AddFoodScreen from '../screens/AddFoodScreen';

const FoodappNavigator=createStackNavigator({
    Login:{
        screen:LoginScreen,
        navigationOptions: { headerShown:false }
    },
    Profile:ProfileScreen,
    Result: {
        screen:ResultScreen
    },
    Vote: VoteScreen,
    FoodDetails:FoodDetailsScreen,
    AddScreen:AddFoodScreen

})

// const ProfileTabNav = createBottomTabNavigator({
//     Profile:ProfileScreen,
//     Vote: VoteScreen
// })

export default createAppContainer(FoodappNavigator);