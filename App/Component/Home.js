/**
 * Created by kien.lovan on 8/21/2017.
 */
import React, {Component} from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import {Provider} from 'react-redux';
import store from '../store'
import TestRedux from '../Component/TestRedux'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    _onPress() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Provider store={store}>
                <View>
                    <TestRedux/>
                    <Text>{this.props.navigation.state.params.username}</Text>
                    <Text>{this.props.navigation.state.params.password}</Text>
                    <TouchableOpacity
                        onPress={this._onPress.bind(this)}
                    >
                        <Text>back</Text>
                    </TouchableOpacity>

                </View>
            </Provider>
        );
    }
}