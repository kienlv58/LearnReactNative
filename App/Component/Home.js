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

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    _onPress(){
        alert(1);
    }
    render() {
        return (

            <View>
                <Text></Text>
                <TouchableOpacity
                    onPress={this._onPress.bind(this)}
                >
                    <Text>back</Text>
                </TouchableOpacity>

            </View>
        );
    }
}