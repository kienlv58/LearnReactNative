/**
 * Created by kien.lovan on 8/22/2017.
 */
/**
 * Created by kien.lovan on 8/21/2017.
 */
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import {connect} from 'react-redux';
import {getData} from '../actions'

class TestRedux extends Component {

    componentWillMount(){
        this.props.getData();
    }

    render() {
        return (
            <View>
                <Text>{this.props.data.name}</Text>
                <Text>{this.props.data.age}</Text>

            </View>
        );
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return{
        data:state.reducerEmployee

    }
}
export default connect(mapStateToProps,{getData})(TestRedux);