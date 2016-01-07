var React = require('react-native');

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
        setTimeout( () => {
            console.log("green complete...");
            this.setState({greenComplete: true });
            setTimeout( () => {
                console.log("yellow complete...");
                this.setState({yellowComplete: true });
                setTimeout( () => {
                    console.log("red complete...");
                    this.sendToCompleteScreen();
                }, 1000);
            }, 1000);
        }, 1000);
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
            <View style={styles.container}>
                <View style={containerStyle}>
                    <Text> Green: {this.props.timerInfo.greenTime}</Text>
                    <Text> Yellow: {this.props.timerInfo.yellowTime}</Text>
                    <Text> Red: {this.props.timerInfo.redTime}</Text>
                </View>
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
