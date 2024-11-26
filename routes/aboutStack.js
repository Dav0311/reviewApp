import { createStackNavigator } from "react-navigation-stack";
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import React from "react";
import Header from "../shared/header";
const screens = {

    About: {
        screen:About,
        navigationOptions: ( {navigation} ) => {
            return {
                HeaderTitle:()=> <Header navigation={navigation} title='About GameZone'/>,
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

const AboutStack= createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle:{

            backgroundColor:'#eee',
            height:60,

        }
    }
});

export default AboutStack;