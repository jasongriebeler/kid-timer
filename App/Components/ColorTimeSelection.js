var React = require('react-native');

var {
    Text,
    View,
    Component,
    StyleSheet,
    TouchableHighlight,
    Image,
    } = React;

import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

var MK = require('react-native-material-kit');

var {
    MKButton,
    } = MK;

var Colors = require('./Colors');
var Divider = require('./Divider');

const rows = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["0"]];

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
            time:['0', '0', '0', '0', '0', '0'],
        }
    }

    onSubmitCallback(){
        this.state.onSubmit({
            "colorSelection": this.props.colorSelection,
            "navigator": this.props.navigator,
            "timerInfo": this.props.timerInfo,
            "color": this.props.color,
            "time": this.state.time,
        });
    }

    keypadPress(value) {
        var time = this.state.time;
        var significantDigits = time.filter((elem) => elem != '0').length;
        if(significantDigits < 6){
            time.shift();
            time.push(value);
        }
        this.setState({time});
        console.log(this.state);
    }

    backspace() {
        console.log("BACKSPACE");
        var time = this.state.time;
        var significantDigits = time.filter((elem) => elem != '0').length;
        console.log("Significant digits: " + significantDigits);
        if (significantDigits > 0) {
            time.pop();
            time.unshift('0');
            console.log("TIME");
            console.log(time);
        }
        this.setState({time});
        console.log(this.state);
    }

    render() {
        console.log("render.");
        return (
            <View style={[styles.container, {backgroundColor: this.state.color.primaryDark}]}>
                <View style={styles.selectionContainer}>
                    <View style={styles.selectionTextFieldContainer}>
                        <Text style={[styles.timeText, {color: this.state.color.textIcons}]}>{this.state.time.slice(0, 2)}</Text>
                        <Text style={[styles.timeLabel, {color: this.state.color.primaryLight}]}>h</Text>
                    </View>
                    <View style={styles.selectionTextFieldContainer}>
                        <Text style={[styles.timeText, {color: this.state.color.textIcons}]}>{this.state.time.slice(2, 4)}</Text>
                        <Text style={[styles.timeLabel, {color: this.state.color.primaryLight}]}>m</Text>
                    </View>
                    <View style={styles.selectionTextFieldContainer}>
                        <Text style={[styles.timeText, {color: this.state.color.textIcons}]}>{ this.state.time.slice(4, 6)}</Text>
                        <Text style={[styles.timeLabel, {color: this.state.color.primaryLight}]}>s</Text>
                    </View>
                    <MKButton style={styles.backspaceContainer} onPress={this.backspace.bind(this)}>
                        <Image style={styles.backspaceImage} source={require('./images/backspace.png')} />
                    </MKButton>
                </View>
                <Divider color={this.state.color.divider} />
                <View style={styles.keypad}>
                    {
                        rows.map( (row) => {
                            return (
                                <View key={'row' + row} style={styles.keypadrow}>
                                    {
                                        row.map( (value) => {
                                            return (
                                                <MKButton key={'button' + value} style={styles.keypadbutton} onPress={() => { this.keypadPress(value) }}>
                                                    <Text key={'text' + value} style={[styles.keypadtext, {color: this.state.color.textIcons}]}>{value}</Text>
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
                        style={[styles.submitButton, { backgroundColor: this.state.color.primaryDefault }]}
                        onPress={this.onSubmitCallback.bind(this)}
                        underlayColor={this.state.color.primaryLight}>
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
    selectionContainer:{
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'center',
    },
    selectionTextFieldContainer:{
        alignSelf: 'flex-end',
        flexDirection: 'row',
        paddingLeft: 15,
    },
    timeText: {
        fontSize: 50,
        alignSelf: 'center',
    },
    timeLabel: {
        fontSize: 20,
        alignSelf: 'flex-end',
        paddingBottom: 5,
    },
    backspaceContainer: {
        paddingRight: 30,
        paddingLeft: 10,
        justifyContent: 'center',
    },
    backspaceImage: {
        marginTop: 15,
        alignSelf: 'center',
    },
    submitContainer: {
        flexDirection: 'row',
    },
    submitButton: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        alignSelf: 'flex-end',
    },
    submitButtonText:{
        alignSelf: 'center',
        fontSize: 20,
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
        flex: 5,
        margin: 10,
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
        fontSize: 40,
    },
});

module.exports = ColorTimeSelection;
