'use strict';

var React = require('react-native');
var Q = require('q');
var reactMixin = require('react-mixin');
var TimerMixin = require('react-timer-mixin');
var moment = require('moment');
var Colors = require('./Colors');

var {
    Text,
    View,
    Component,
    StyleSheet,
    InteractionManager,
    Animated,
    } = React;

class TimerScreen extends Component {

    constructor(props){
        super(props);

        console.log("Timer props");
        console.log(props);

        this.render = this.render.bind(this); // needed?
        console.log("TIMER SCREEN PROPS");
        console.log(props);
        this.state = {
            timerInfo: props.timerInfo
        }
        this._animatedValue = new Animated.Value(0);
    }

    setTimeLeft(time){
        console.log("time left: " + time);
        var timeLeft = parseInt(time);
        var formattedTimeLeft = moment().minute(0).hour(0).second((timeLeft / 1000)).format('hh:mm:ss');
        this.setState({
            timeLeft: timeLeft,
            formattedTimeLeft: formattedTimeLeft
        });
    }

    countdown(){
        this.setTimeLeft(this.state.timeLeft - 1000);
    }

    toMilliseconds(time){
        console.log("time");
        console.log(time);

        var fromSeconds = time.seconds * 1000;
        var fromMinutes = time.minutes * 60000;
        var fromHours = time.hours * 3600000;
        return fromSeconds + fromMinutes + fromHours;
    }

    runTimer(){
        console.log("Starting timer process...");

        var greenTime = this.toMilliseconds(this.props.timerInfo.greenTime);
        var yellowTime = this.toMilliseconds(this.props.timerInfo.yellowTime);
        var redTime = this.toMilliseconds(this.props.timerInfo.redTime);
        var clockHandle;

        var zeroDelay = 1000;

        Q()
            .then( () => {
                console.log('starting green timer: ' + greenTime + "ms");
                this.setTimeLeft(greenTime);
                clockHandle = this.setInterval(this.countdown, 1000);
            })
            .delay(greenTime + zeroDelay)
            .then ( () => {
                Animated.timing(this._animatedValue, {
                    toValue: 100,
                    duration: 500,
                }).start();
                this.clearInterval(clockHandle);
                console.log("green timer complete...");
                this.setState({greenComplete: true});
                console.log('starting yellow timer: ' + yellowTime + "ms");
                this.setTimeLeft(yellowTime);
                clockHandle = this.setInterval(this.countdown, 1000);
            })
            .delay(yellowTime + zeroDelay)
            .then ( () => {
                Animated.timing(this._animatedValue, {
                    toValue: 200,
                    duration: 500,
                }).start();
                this.clearInterval(clockHandle);
                console.log("yellow timer complete...");
                this.setState({yellowComplete: true});
                console.log('starting red timer: ' + redTime + "ms");
                this.setTimeLeft(redTime);
                clockHandle = this.setInterval(this.countdown, 1000);
            })
            .delay(redTime + zeroDelay)
            .then( () => {
                this.clearInterval(clockHandle);
                console.log("red timer complete...");
                this.setState({redComplete: true});
            }).then( () => {
                this.clearInterval(clockHandle);
            })
            .then( () => {
                this.sendToCompleteScreen();
            }).done();
    }

    componentDidMount() {
        console.log("timer screen mounted, scheduling timer run.")
        InteractionManager.runAfterInteractions(() => {
            console.log("interactions complete...");
            this.runTimer();
        });
    }

    sendToCompleteScreen(){
        console.log("send to complete screen...");
        console.log(this.props);
        this.props.navigator.push({
            name: 'TIMER_COMPLETE_SCREEN'
        });
    }

    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16);
    }

    render() {

        var interpolatedColorAnimation = this._animatedValue.interpolate({
            inputRange: [0, 100, 200],
            outputRange: ['rgba(' + this.hexToRgb(Colors.green.primaryDark) + ', 1)', 'rgba(' + this.hexToRgb(Colors.yellow.primaryDark) + ', 1)', 'rgba(' + this.hexToRgb(Colors.red.primaryDark) + ', 1)']
        });

        return (
            <Animated.View style={[styles.timerContainer, { backgroundColor: interpolatedColorAnimation }]}>
                <Text style={styles.timeLeft}>{this.state.formattedTimeLeft}</Text>
            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    timerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    timeLeft: {
        fontSize: 50,
        color: '#FFFFFF',
    }
});

reactMixin(TimerScreen.prototype, TimerMixin);

module.exports = TimerScreen;
