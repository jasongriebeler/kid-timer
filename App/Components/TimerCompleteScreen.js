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
                <Text style={styles.text}>Clickity</Text>
                <Image style={styles.image} source={require('./images/chuggington.jpg')} />
                <Text style={styles.text}>Clack</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
    },
    image:{
      flex: 3
    },
    text:{
        fontSize: 45,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
    }
});

module.exports = TimerCompleteScreen;
