var React = require('react-native');

var {
    Text,
    Animated,
    TouchableOpacity,
    Component,
    StyleSheet,
    } = React;

var Dimensions = require('Dimensions');

var {
    height: deviceHeight
    } = Dimensions.get('window');

class WheelModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            offset : new Animated.Value(deviceHeight)
        }
    }

    componentDidMount() {
        Animated.timing(this.state.offset, {
            duration: 100,
            toValue: 0
        }).start();
    }
    closeModal() {
        Animated.timing(this.state.offset, {
            duration: 100,
            toValue: deviceHeight
        }).start(this.props.closeModal);
    }
    render() {
        return (
            <Animated.View style={[styles.modal, styles.flexCenter, {transform: [{translateY: this.state.offset}]}]}>
                <TouchableOpacity onPress={this.closeModal.bind(this)}>
                    <Text style={{color: '#FFF'}}>Close Menu</Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        backgroundColor: 'rgba(0,0,0,.8)',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
});

module.exports = WheelModal;