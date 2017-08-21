/**
 * Created by kien.lovan on 8/21/2017.
 */
import React, {Component} from  'react';
import {StackNavigator} from 'react-navigation'

import Login from '../Component/Login'
import Home from '../Component/Home'

export const appBase = StackNavigator({

    LoginScreen:{
        screen:Login,
            navigationOptions:{
            title:'Login'
        }
    },
    HomeScreen:{
        screen:Home,
        navigationOptions:{
            title:'Home'
        }
    }
})

