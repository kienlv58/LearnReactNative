/**
 * Created by kien.lovan on 8/21/2017.
 */
import React, {Component} from  'react';
import {StackNavigator, TabNavigator} from 'react-navigation'

import Login from '../Component/Login'
import Home from '../Component/Home'
import ListView from '../Component/TestLV'


export const Tabbar = TabNavigator({
    HomeScreen: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    ListScreen: {
        screen: ListView,
        navigationOptions: {
            headerMode: "none",
            headerMode: "float",
            title: 'LisScren'
        }
    }
},{
    headerMode: "none"
})
export const AppBase = StackNavigator({

    LoginScreen: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
            tabBarLabel:"tab1"
        }
    },
    Tabbar: {
        screen: Tabbar,
        navigationOptions: {
            tabBarLabel:"tab2"
        }
    }

    },{
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'blue',
        },

    }
})


