var React = require('react-native');

var {
    Text,
    View,
    Component,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    ToastAndroid,
    } = React;

var {
    height: deviceHeight,
    width: deviceWidth
    } = Dimensions.get('window');

var WheelView = require('react-native-wheel');

class ColorTimeSelection extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            onSubmit: props.onSubmit,
            minutes: this.range(1, 60),
            currentIndex: 0,
            colorSelection: props.colorSelection
        }
        console.log("PROPS2");
        console.log(props);
    }

    onItemChange(index){
        this.setState({"currentIndex": index});
    }

    range(start, stop) {
        var result = [];
        for (var i = start; i < stop; i++) {
            result.push("" + i);
        }

        return result;
    }

    onSubmitCallback(){
        this.state.onSubmit({
            "minutes": this.state.minutes[this.state.currentIndex],
            "colorSelection": this.props.colorSelection,
            "navigator": this.props.navigator,
            "timerInfo": this.props.timerInfo,
        });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>{this.state.title} Selection</Text>
                </View>
                <View style={styles.wheelContainer}>
                    <WheelView
                        style={styles.wheelview}
                        onItemChange={this.onItemChange.bind(this)}
                        values={this.state.minutes}
                        isLoop={true}
                        selectedIndex={0}
                        textSize={20}
                        ref='numbers'
                    />
                </View>
                <TouchableHighlight
                    style={styles.submitButton}
                    onPress={this.onSubmitCallback.bind(this)}
                    underlayColor="#E39EBF">
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    header:{
        borderRadius: 4,
        borderWidth: 3,
        borderColor: 'red',
    },
    wheelContainer: {
        borderRadius: 4,
        borderWidth: 3,
        borderColor: 'blue',
    },
    wheelview: {
        alignSelf: 'center',
        width: deviceWidth,
        height: deviceHeight / 5,
    },
    textContainer:{
        backgroundColor: 'green',
        borderRadius: 4,
        borderWidth: 3,
        borderColor: 'blue',
    },
    submitContainer: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 2,
    },
    submitButton: {
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 4,
        borderWidth: 3,
        borderColor: 'green',
    },
    submitButtonText:{
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
    },
    text: {
        fontSize: 24,
        alignSelf: 'center',
    },
    previous: {
        fontSize: 22,
        color: '#000000',
    },
    next: {
        color: '#000000',
        fontSize: 22,
    },
});

module.exports = ColorTimeSelection;
