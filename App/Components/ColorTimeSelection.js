var React = require('react-native');

var {
    Text,
    View,
    Component,
    StyleSheet,
    TouchableHighlight,
    } = React;

import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

var MK = require('react-native-material-kit');

var {
    MKButton,
    MKTextField,
    MKColor,
    } = MK;

var Colors = require('./Colors');

class ColorTimeSelection extends Component {

    constructor(props){
        super(props);

        console.log("Color Time Selection props");
        console.log(props);

        this.state = {
            title: props.title,
            onSubmit: props.onSubmit,
            colorSelection: props.colorSelection,
            color: props.color,
            timeUnitOptions: [ 'Seconds', 'Minutes' ],
            timeUnit: 'Minutes',
            selectedTime: '0'
        }
    }

    onSubmitCallback(){
        this.state.onSubmit({
            "colorSelection": this.props.colorSelection,
            "navigator": this.props.navigator,
            "timerInfo": this.props.timerInfo,
            "color": this.props.color
        });
    }

    selectTimeUnit(timeUnit){
        this.setState({ timeUnit });
    }

    onButtonPress(value){
        console.log("updating value...");

        this.state.selectedTime = this.state.selectedTime + "" + value;
        console.log(this.state.selectedTime);
    }

    render() {
        var rows = [
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"],
            ["0"]];
        return (
            <View style={[styles.container, {backgroundColor: this.state.color.primaryDefault}]}>
                <View style={[styles.header, {backgroundColor: this.state.color.primaryDark}]}>
                    <Text style={[styles.title, {color: this.state.color.textIcons}]}>{this.state.title.toUpperCase()} SELECTION</Text>
                </View>
                <View style={styles.selectionContainer}>
                    <Text style={styles.selectionTextField}>{this.state.selectedTime} </Text>
                </View>
                <View style={styles.keypad}>
                    {
                        rows.map( (row) => {
                            return (
                                <View key={'row' + row} style={styles.keypadrow}>
                                    {
                                        row.map( (value) => {
                                            return (
                                                <MKButton key={'button' + value} style={styles.keypadbutton} onPress={() => { this.onButtonPress(value) }}>
                                                    <Text key={'text' + value} style={[styles.keypadtext, {color: this.state.color.primaryLight}]}>{value}</Text>
                                                </MKButton>)
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.submitContainer}>
                    <TouchableHighlight
                        style={[styles.submitButton, { backgroundColor: this.state.color.accent }]}
                        onPress={this.onSubmitCallback.bind(this)}
                        underlayColor="#E39EBF">
                        <Text style={[ styles.submitButtonText, { color: this.state.color.textIcons } ]}>Submit</Text>
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
        alignItems: 'center',
    },
    selectionContainer:{
        borderWidth: 1,
        borderColor: 'black'
    },
    selectionTextField:{
        alignSelf: 'stretch',
    },
    submitContainer: {
        flexDirection: 'row',
    },
    submitButton: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 30,
        alignSelf: 'flex-end',
    },
    submitButtonText:{
        alignSelf: 'center',
        fontSize: 20,
        color: 'white',
    },
    title: {
        fontSize: 24,
        margin: 20,
        justifyContent: 'center',
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
        color: Colors.TEXT_ICONS,
    }
});

module.exports = ColorTimeSelection;
