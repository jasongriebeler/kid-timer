var React = require('react-native');

var {
    Text,
    View,
    Component,
    StyleSheet,
    } = React;

class TimerCompleteScreen extends Component {
    render() {
        return (
            <View>
                <Text> DONE </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
});

module.exports = TimerCompleteScreen;
