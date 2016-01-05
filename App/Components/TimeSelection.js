var React = require('react-native');

var {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Component
    } = React;

class TimeSelection extends Component {

    constructor(props){
        super(props);
        this.render = this.render.bind(this);
        this.state = {
            timerInfo:{
                greenTime: null,
                yellowTime: null,
                redTime: null
            }
        };
    }

    sendToTimer(event){
        this.props.navigator.push({
            name: 'TIMER_SCREEN',
            timerInfo: {
                greenTime: this.state.greenTime,
                yellowTime: this.state.yellowTime,
                redTime: this.state.redTime
            }
        });
    }

    updateState(text, property){
        var newState = React.addOns.update(this.state, {
            timerInfo:{
                property: {$set: text}
            }
        });
        this.setState(newState);
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Time Selection</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(greenTime) => this.setState({greenTime})}
                    placeholder='Green Time'
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(yellowTime) => this.setState({yellowTime})}
                    placeholder='Yellow Time'
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(redTime) => this.setState({redTime})}
                    placeholder='Red Time'
                />
                <TouchableHighlight
                    onPress={this.sendToTimer.bind(this)}
                    underlayColor='transparent'>
                    <Text>Submit</Text>
                </TouchableHighlight>
            </View>
        )
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

module.exports = TimeSelection;
