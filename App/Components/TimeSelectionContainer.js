var React = require('react-native');

var {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Component,
    } = React;

var ColorTimeSelection = require('./ColorTimeSelection');

class TimeSelectionContainer extends Component {

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

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.timeSelection}>
                    <Text style={styles.timeSelectionText}>Time Selection</Text>
                </View>
                <View style={styles.colorSelection}>
                    <ColorTimeSelection />
                </View>
                <View style={styles.submitContainer}>
                    <TouchableHighlight
                        style={styles.submitButton}
                        onPress={this.sendToTimer.bind(this)}
                        underlayColor="#E39EBF">
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
};

var styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems:'stretch',
        borderRadius: 4,
        borderWidth: 3,
        borderColor: 'yellow',
    },
    timeSelection: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
    },
    timeSelectionText: {
        alignSelf: 'center',
        fontSize: 36,
    },
    colorSelection:{
        backgroundColor: 'blue',
        flex: 2,
    },
    submitContainer: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 1,
    },
    submitButton: {
        backgroundColor: 'green',
        justifyContent: 'center',
        padding: 20,
    },
    submitButtonText:{
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
    },
});

module.exports = TimeSelectionContainer;
