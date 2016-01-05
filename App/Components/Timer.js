var React = require('react-native');
var TimerMixin = require('react-timer-mixin');

var {
    Text,
    View,
    Component,
    StyleSheet,
    } = React;

var red = "#F44336";
var yellow = "#FFEB3B";
var green = "#4CAF50";

var Timer = React.createClass({

    mixins: [TimerMixin],

    getInitialState: function(){
      return ({
          fired: false
      });
    },

    componentDidMount: function() {
        this.setTimeout(
            () => {
                console.log("FIRE!");
                this.setState({fired: true})
            },
            5000
        );
    },

    render: function() {
        return (
            <View style={styles.container}>
                <View style={this.state.fired ? styles.timerContainerRed : styles.timerContainerOff} ref="timerContainer">
                    <Text> Green: {this.props.timerInfo.greenTime}</Text>
                    <Text> Yellow: {this.props.timerInfo.yellowTime}</Text>
                    <Text> Red: {this.props.timerInfo.redTime}</Text>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container:{

    },
    timerContainerOff: {
        backgroundColor: '#9E9E9E',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    timerContainerRed: {
        backgroundColor: '#F44336',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

module.exports = Timer;
