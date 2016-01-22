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
var _ = require('lodash');

var minutes = ['1', '2'];q

var wheelData = ['one','two','three','four','five','six','seven','eight','nine','ten'];

var currentIndex;

class ColorTimeSelection extends Component {

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

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.previous.bind(this)} >
                    Previous
                </Text>
                <Text style={styles.instructions} onPress={this.next.bind(this)} >
                    Next
                </Text>
                <Text style={styles.instructions} onPress={this.finish.bind(this)} >
                    Finish
                </Text>
                <WheelView
                    style={styles.wheelview}
                    onItemChange={this.onItemChange}
                    values={minutes}
                    isLoop={false}
                    selectedIndex={0}
                    textSize={20}
                    ref='numbers'
                />
                <WheelView
                    style={styles.wheelview}
                    onItemChange={this.onItemChange}
                    values={wheelData}
                    isLoop={false}
                    selectedIndex={0}
                    textSize={20}
                    ref='units'
                />
            </View>

        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
        width: deviceWidth / 2,
        height: deviceHeight/5*2,
    },
});

module.exports = ColorTimeSelection;
