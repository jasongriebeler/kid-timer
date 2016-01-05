var React = require('react-native');
var Timer = require('./Timer');

var {
    Text,
    View,
    Component,
    StyleSheet,
    } = React;

class TimerScreen extends Component {
    render() {
        return (
            <View>
                <Timer timerInfo={this.props.timerInfo} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
});

module.exports = TimerScreen;
