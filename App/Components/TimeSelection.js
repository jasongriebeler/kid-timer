var React = require('react-native');

var {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Component,
    } = React;

var WheelView = require('react-native-wheel');
var Dimensions = require('Dimensions');

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

var wheelData = ['one','two','three','four','five','six','seven','eight','nine','ten'];

var currentIndex;

class TimeSelection extends Component {

    constructor(props){
        super(props);
        this.render = this.render.bind(this); // needed?
        this.state = {
            timerInfo:{
                greenTime: 0,
                yellowTime: 0,
                redTime: 0
            }
        };
    }

    onItemChange(index){
        currentIndex = index;
    }

    sendToTimer(){
        this.props.navigator.push({
            name: 'TIMER_SCREEN',
            timerInfo: {
                greenTime: this.state.greenTime,
                yellowTime: this.state.yellowTime,
                redTime: this.state.redTime
            }
        });
    }

    sendToModal(){
        this.props.navigator.push({
            name: 'TEMP',
        });
    }


    openWheel(time){
        console.log("Open wheel for " + time);
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>Time Selection</Text>
                <TouchableHighlight
                    style={styles.greenContainer}
                    onPress={this.openWheel('greenTime')}
                    underlayColor='transparent'>
                    <Text>Green Time</Text>
                </TouchableHighlight>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    keyboardType='numeric'
                    onChangeText={(greenTime) => this.setState({greenTime})}
                    placeholder='Green Time'
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    keyboardType='numeric'
                    onChangeText={(yellowTime) => this.setState({yellowTime})}
                    placeholder='Yellow Time'
                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    keyboardType='numeric'
                    onChangeText={(redTime) => this.setState({redTime})}
                    placeholder='Red Time'
                />
                <WheelView
                    style={styles.wheelview}
                    onItemChange={this.onItemChange}
                    values={wheelData}
                    isLoop={false}
                    selectedIndex={0}
                    textSize={20}
                    ref='wheel'
                />
                <TouchableHighlight
                    onPress={this.sendToModal.bind(this)}>
                    <Text>Modal</Text>
                </TouchableHighlight>
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
    greenContainer: {
        borderRadius: 50,
        width: SCREEN_WIDTH * .80,
        height: 30,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center'
    },
    previous: {
        margin: 20,
        fontSize: 22,
        color: '#000000',
    },
    next: {
        margin: 20,
        color: '#000000',
        fontSize: 22,
    },
    finish: {
        margin: 20,
        color: '#000000',
        fontSize: 22,
    },
    wheelview: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT/5*2,
    }
});

module.exports = TimeSelection;
