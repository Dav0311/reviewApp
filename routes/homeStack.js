import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from "../shared/header";
import React from "react";

const screens = {

    Home: {
        screen:Home,
        navigationOptions: ( {navigation} ) => {
            return {
                HeaderTitle:()=> <Header navigation={navigation} title='GameZone' />,
            }
            // headerStyle:{
            //     backgroundColor:'#eee'
            // }
        }
    },
    ReviewDetails :{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Review Details',
            // headerStyle:{
            //     backgroundColor:'#eee'
            // }
        }
    }

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle:{

            backgroundColor:'#eee',
            height:60,

        }
    }
});

export default HomeStack;