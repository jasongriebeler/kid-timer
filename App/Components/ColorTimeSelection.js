var React = require('react-native');

var {
    Text,
    View,
    Component,
    StyleSheet,
    Dimensions,
    ToastAndroid,
    } = React;

var {
    height: deviceHeight,
    width: deviceWidth
    } = Dimensions.get('window');

var WheelView = require('react-native-wheel');

var minutes;

var currentIndex;

class ColorTimeSelection extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: props.title
        }
        minutes = this.range(1, 60);
    }

    previous(){
        this.refs.wheel.previous();
    }

    next(){
        this.refs.wheel.next();
    }

    finish(){
        ToastAndroid.show('select item : ' + wheelData[currentIndex] ,ToastAndroid.LONG);
    }

    onItemChange(index){
        currentIndex = index;
    }

    range(start, stop) {
        var result = [];
        for (var i = start; i < stop; i++) {
            result.push("" + i);
        }

        return result;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{this.state.title}</Text>
                </View>
                <View style={styles.wheelContainer}>
                    <WheelView
                        style={styles.wheelview}
                        onItemChange={this.onItemChange}
                        values={minutes}
                        isLoop={true}
                        selectedIndex={0}
                        textSize={20}
                        ref='numbers'
                    />
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        borderRadius: 4,
        borderWidth: 3,
        borderColor: 'blue',
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
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
    text: {
        fontSize: 24,
        alignSelf: 'center',
        color: "#FFFFFF",
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
