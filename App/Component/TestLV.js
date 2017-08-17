/**
 * Created by kien.lovan on 8/17/2017.
 */
import React,{Component} from  'react'
import {
    View,
    Text,
    ListView,
    TextInput,
    StyleSheet
} from 'react-native'

export default class TestLV extends Component{
    constructor(props){
        super(props)
        data = ["kien","hoa","binh"];
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
            userName:''
        }
    }

    _renderRow(data){
        return(
            <View>
                <Text> {data}</Text>
            </View>
        )
    }
    _renderSeparator(sectionID,rowID,rowSelected){
        <View>
            <View key = {sectionID+rowID}>
                {sectionID}
            </View>
        </View>
    }
    _onPress(){
        let userName = this.state.userName;
        data.push(userName);
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(data)
        })
    }
    render(){
        return(
          <View>
              <View>
                  <TextInput placeholder={"nhap ten"} onChangeText={(value)=>this.setState({userName:value})}/>
                  <Text onPress={this._onPress.bind(this)}>Sumbit</Text>
              </View>

              <ListView
                dataSource={this.state.dataSource}
                renderRow ={this._renderRow.bind(this)}
                rendeSeparator={this._renderSeparator.bind(this)}
              />
          </View>
        );
    }
}
