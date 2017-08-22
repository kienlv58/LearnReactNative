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

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            userName:"",
            passWord:""
        }
    }
    _onPress(){

        // alert(this.state.userName +"--" +this.state.passWord)
    }
  render() {
    return (

        <View>
            <TextInput onChangeText={(value)=>this.setState({userName:value})} placeholder={"user name"}/>
            <TextInput onChangeText={(value)=>this.setState({passWord:value})} placeholder={"password"} secureTextEntry={true}/>
            <TouchableOpacity
            //onPress={this._onPress.bind(this)}
                onPress={()=>{this.props.navigation.navigate("Tabbar",{},{
                    type: "Navigate",
                    routeName: "HomeScreen",
                    params: {username:this.state.userName,password:this.state.passWord},
                })}}
            >
                <Text>dang-nhap</Text>
            </TouchableOpacity>
        </View>
    );
  }
}