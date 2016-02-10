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
            <View style={styles.container}>
                <Image source={require('./images/chuggington.png')} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
});

module.exports = TimerCompleteScreen;
