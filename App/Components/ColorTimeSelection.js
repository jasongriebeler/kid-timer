'use strict';

var React = require('react-native');

var {
    Text,
    View,
    Component,
    StyleSheet,
    TouchableHighlight,
    TouchableNativeFeedback,
    Image,
    } = React;

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
            "time": {
                hours: parseInt(this.state.time.slice(0, 2)),
                minutes: parseInt(this.state.time.slice(2, 4)),
                seconds: parseInt(this.state.time.slice(4, 6)),
            },
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
    }

    backspace() {
        var time = this.state.time;
        var significantDigits = time.filter((elem) => elem != '0').length;
        if (significantDigits > 0) {
            time.pop();
            time.unshift('0');
        }
        this.setState({time});
    }

    render() {
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
                    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackgroundBorderless()}  onPress={this.backspace.bind(this)}>
                        <View style={styles.backspaceContainer}>
                            <Image style={styles.backspaceImage} source={require('./images/backspace.png')} />
                        </View>
                    </TouchableNativeFeedback>
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
                                                <TouchableNativeFeedback
                                                    key={'button' + value}
                                                    background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
                                                    style={styles.keypadbutton}
                                                    onPress={() => { this.keypadPress(value) }}>
                                                    <View style={styles.keypadTextWrapper}>
                                                        <Text key={'text' + value} style={[styles.keypadtext, {color: this.state.color.primaryLight}]}>{value}</Text>
                                                    </View>
                                                </TouchableNativeFeedback>)
                                        })
                                    }
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.submitContainer}>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
                        onPress={this.onSubmitCallback.bind(this)}
                        underlayColor={this.state.color.primaryLight}>
                        <View style={[styles.submitButtonWrapper, {backgroundColor: this.state.color.primaryDefault}]}>
                            <Text style={[ styles.submitButtonText, { color: this.state.color.textIcons } ]}>Submit</Text>
                        </View>
                    </TouchableNativeFeedback>
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
        paddingBottom: 8,
    },
    backspaceContainer: {
        paddingRight: 30,
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    backspaceImage: {
        marginTop: 15,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    submitButtonWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 20
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
    keypadTextWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    keypadtext: {
        fontSize: 40,
    },
});

module.exports = ColorTimeSelection;
