var React = require('react-native');
var Q = require('q');

var {
    Text,
    View,
    Component,
    StyleSheet,
    } = React;

class TimerScreen extends Component {

    constructor(props){
        super(props);
        this.render = this.render.bind(this); // needed?
        console.log("TIMER SCREEN PROPS");
        console.log(props);
        this.state = {
            timerInfo: props.timerInfo
        }
    }

    timer(time, resolveAction) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("timer complete...");
                resolveAction();
                resolve();
            }, time);
        });
    }

    componentDidMount() {

        var greenTime = parseFloat(this.props.timerInfo.greenTime) * 1000;
        var yellowTime = parseFloat(this.props.timerInfo.yellowTime) * 1000;
        var redTime = parseFloat(this.props.timerInfo.redTime) * 1000;
        console.log("starting timer...");
        Q()
            .then( () =>{
                console.log('starting green timer: ' + greenTime + "ms");
            })
            .delay(greenTime)
            .then ( () =>{
                console.log("green timer complete...");
                this.setState({greenComplete: true});
                console.log('starting yellow timer: ' + yellowTime + "ms");
            })
            .delay(yellowTime)
            .then ( () =>{
                console.log("yello timer complete...");
                this.setState({yellowComplete: true});
                console.log('starting red timer: ' + redTime + "ms");
            })
            .delay(redTime)
            .then( () =>{
                console.log("red timer complete...");
                this.sendToCompleteScreen();
            }).done();
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

        console.log(this.props);

        return (
            <View style={containerStyle}>
                <Text> Green: {this.props.timerInfo.greenTime}</Text>
                <Text> Yellow: {this.props.timerInfo.yellowTime}</Text>
                <Text> Red: {this.props.timerInfo.redTime}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {},
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

module.exports = TimerScreen;
