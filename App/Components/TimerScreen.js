var React = require('react-native');
var Q = require('q');
var reactMixin = require('react-mixin');
var TimerMixin = require('react-timer-mixin');
var moment = require('moment');

var {
    Text,
    View,
    Component,
    StyleSheet,
    InteractionManager,
    Animated,
    } = React;

const RED_RGB = "244, 67, 54";
const YELLOW_RGB = "255, 235, 59";
const GREEN_RGB = "76, 175, 80";

class TimerScreen extends Component {

    constructor(props){
        super(props);
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
        var formattedTimeLeft = moment().minute(0).second((timeLeft / 1000)).format('mm:ss');
        this.setState({
            timeLeft: timeLeft,
            formattedTimeLeft: formattedTimeLeft
        });
    }

    countdown(){
        this.setTimeLeft(this.state.timeLeft - 1000);
    }

    runTimer(){
        console.log("Starting timer process...");

        var greenTime = parseFloat(this.props.timerInfo.greenTime) * 1000;
        var yellowTime = parseFloat(this.props.timerInfo.yellowTime) * 1000;
        var redTime = parseFloat(this.props.timerInfo.redTime) * 1000;
        var clockHandle;
        Q()
            .then( () => {
                console.log('starting green timer: ' + greenTime + "ms");
                this.setTimeLeft(greenTime);
                clockHandle = this.setInterval(this.countdown, 1000);
            })
            .delay(greenTime)
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
            .delay(yellowTime)
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
            .delay(redTime)
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

    render() {

        var containerStyle = styles.timerContainerGreen;
        if (this.state.greenComplete)
            containerStyle = styles.timerContainerYellow;
        if (this.state.yellowComplete)
            containerStyle = styles.timerContainerRed;

        var interpolatedColorAnimation = this._animatedValue.interpolate({
            inputRange: [0, 100, 200],
            outputRange: ['rgba(' + GREEN_RGB + ', 1)', 'rgba(' + YELLOW_RGB + ', 1)', 'rgba(' + RED_RGB + ', 1)']
        });

        return (
            <Animated.View style={[containerStyle, { backgroundColor: interpolatedColorAnimation }]}>
                <Text>{this.state.formattedTimeLeft}</Text>
            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    container: {},
    box: {
        position: 'absolute',
        top: 100,
        left: 100,
        width: 100,
        height: 100
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
    },
    timerContainerYellow: {
        backgroundColor: '#FFEB3B',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    timerContainerGreen: {
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

reactMixin(TimerScreen.prototype, TimerMixin);

module.exports = TimerScreen;
