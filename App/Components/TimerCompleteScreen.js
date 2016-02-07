'use strict';

var React = require('react-native');

var {
    Text,
    View,
    Component,
    StyleSheet,
    Image
    } = React;

class TimerCompleteScreen extends Component {
    render() {
        return (
            <View>
                <Image source={require('./images/chuggington.png')} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
});

module.exports = TimerCompleteScreen;
