var React = require('react-native');

var {
    View,
    Component,
    StyleSheet,
    } = React;

class Divider extends Component {
    render(){
        return (
            <View style={[ styles.theLine, { backgroundColor: this.props.color } ]}>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    theLine: {
        height: 1,
        margin: 10,

    },
});
module.exports = Divider;
