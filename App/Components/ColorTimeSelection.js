var React = require('react-native');

var {
    Text,
    View,
    Component,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    } = React;

import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

class ColorTimeSelection extends Component {

    constructor(props){
        super(props);

        console.log("Color Time Selection props");
        console.log(props);

        this.state = {
            title: props.title,
            onSubmit: props.onSubmit,
            colorSelection: props.colorSelection,
            hexColor: props.hexColor,
            timeUnitOptions: [ 'Seconds', 'Minutes' ],
            timeUnit: 'Minutes'
        }
    }

    onSubmitCallback(){
        this.state.onSubmit({
            "colorSelection": this.props.colorSelection,
            "navigator": this.props.navigator,
            "timerInfo": this.props.timerInfo,
            "hexColor": this.props.hexColor
        });
    }

    selectTimeUnit(timeUnit){
        this.setState({ timeUnit });
    }

    renderContainer(options){
    return (
        <View style={{
          backgroundColor: 'white',
          paddingLeft: 20,
          borderTopWidth: 1,
          borderTopColor: '#cccccc',
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc',
        }}>
            {options}
        </View>
    );
}

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header, {backgroundColor: this.state.hexColor}]}>
                    <Text style={styles.title}>{this.state.title.toUpperCase()} SELECTION</Text>
                </View>

                <View style={{paddingTop: 20}} />
                <SegmentedControls
                    options={ this.state.timeUnitOptions }
                    onSelection={ this.selectTimeUnit.bind(this) }
                    selectedOption={ this.state.timeUnit }
                    optionStyle={styles.option}
                />
                <View style={styles.keypad}>
                    <View style={styles.keypadrow}>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>1</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>2</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>3</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.keypadrow}>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>4</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>5</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>6</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.keypadrow}>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>7</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>8</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>9</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.keypadrow}>
                        <TouchableHighlight style={styles.keypadbutton}>
                            <Text style={styles.keypadtext}>0</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.submitContainer}>
                    <TouchableHighlight
                        style={styles.submitButton}
                        onPress={this.onSubmitCallback.bind(this)}
                        underlayColor="#E39EBF">
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        padding: 20,
    },
    submitContainer: {
        flexDirection: 'row',
    },
    submitButton: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 20,
        alignSelf: 'flex-end',
    },
    submitButtonText:{
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
    },
    title: {
        fontSize: 24,
        alignSelf: 'center',
    },
    timeUnitContainer:{
        paddingTop: 10
    },
    option: {
        fontSize: 22,
    },
    keypad:{
        flex: 1,
    },
    keypadrow:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'stretch',
        alignSelf: 'stretch',
    },
    keypadbutton:{
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    keypadtext: {
        fontSize: 44,
    }
});

module.exports = ColorTimeSelection;
