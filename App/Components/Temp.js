var React = require('react-native');

var WheelModal = require('./WheelModal');

var {
    Text,
    TouchableOpacity,
    Component,
    View,
    StyleSheet,
    } = React;

class Temp extends Component{

    constructor(props){
        super(props);
        this.render = this.render.bind(this); // needed?
        this.state = {
            modal: false
        }
    }

    openModal(){
        console.log(this.state)
        this.setState({
            modal: true
        });
    }

    render() {
        return (
            <View style={styles.flexCenter}>
                <TouchableOpacity onPress={this.openModal.bind(this)}>
                    <Text>Open Modal</Text>
                </TouchableOpacity>
                {this.state.modal ? <WheelModal closeModal={() => this.setState({modal: false})} /> : null }
            </View>
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

module.exports = Temp;