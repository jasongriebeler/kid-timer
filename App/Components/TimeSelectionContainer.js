'use strict';

var React = require('react-native');

var {
    View,
    StyleSheet,
    Component,
    } = React;

var ColorTimeSelection = require('./ColorTimeSelection');
var Colors = require('./Colors')

class TimeSelectionContainer extends Component {

    constructor(props){
        super(props);
        this.render = this.render.bind(this); // needed?

        if(props.timerInfo) {
            this.state = {
                timerInfo: props.timerInfo,
                color: props.color,
                colorSelection: props.colorSelection
            };
        } else {
            this.state = {
                timerInfo:{
                    greenTime: null,
                    yellowTime: null,
                    redTime: null
                },
                color: Colors.green,
                colorSelection: 'green'
            };
        }
    }

    timeSelected(data){
        var timerInfo = data.timerInfo
        var route;
        var colorSelection;
        var color;

        if(data.colorSelection == 'green') {
            timerInfo.greenTime = data.time;
            route = 'TIME_SELECTION_CONTAINER';
            colorSelection = 'yellow';
            color = Colors.yellow;
        } else if(data.colorSelection == 'yellow') {
            timerInfo.yellowTime = data.time;
            route = 'TIME_SELECTION_CONTAINER';
            colorSelection='red';
            color = Colors.red;
        } else if(data.colorSelection == 'red') {
            timerInfo.redTime = data.time
            route = 'TIMER_SCREEN';
        }

        data.navigator.push({
            name: route,
            timerInfo: timerInfo,
            colorSelection: colorSelection,
            color: color
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <ColorTimeSelection
                    title={this.state.colorSelection + " Time"}
                    navigator={this.props.navigator}
                    onSubmit={this.timeSelected}
                    timerInfo={this.state.timerInfo}
                    colorSelection={this.state.colorSelection}
                    color={this.state.color}
                />
            </View>
        )
    }
};

var styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems:'stretch',
    },
    timeSelection: {
        flex: 1,
        justifyContent: 'center',
    },
    colorSelection:{
        flex: 4,
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'flex-end',
    },
});

module.exports = TimeSelectionContainer;
