var React = require('react-native');

var {
    View,
    StyleSheet,
    Component,
    } = React;

var ColorTimeSelection = require('./ColorTimeSelection');

class TimeSelectionContainer extends Component {

    constructor(props){
        super(props);
        this.render = this.render.bind(this); // needed?

        if(props.timerInfo) {
            this.state = {
                timerInfo: props.timerInfo,
                hexColor: props.hexColor,
                colorSelection: props.colorSelection
            };
        } else {
            this.state = {
                timerInfo:{
                    greenTime: 0,
                    yellowTime: 0,
                    redTime: 0
                },
                hexColor: '#4CAF50',
                colorSelection: 'green'
            };
        }
    }

    timeSelected(data){

        console.log("time selected data for " + data.colorSelection);
        console.log(data);

        var timerInfo = data.timerInfo
        var route;
        var colorSelection;
        var hexColor;

        if(data.colorSelection == 'green') {
            timerInfo.greenTime = data.minutes;
            route = 'TIME_SELECTION_CONTAINER';
            colorSelection = 'yellow';
            hexColor = '#FFEB3B';
        }
        if(data.colorSelection == 'yellow') {
            timerInfo.yellowTime = data.minutes;
            route = 'TIME_SELECTION_CONTAINER';
            colorSelection='red';
            hexColor = '#F44336';
        }
        if(data.colorSelection == 'red') {
            timerInfo.redTime = data.minutes
            route = 'TIMER_SCREEN';
        }

        data.navigator.push({
            name: route,
            timerInfo: timerInfo,
            colorSelection: colorSelection,
            hexColor: hexColor
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
                    hexColor={this.state.hexColor}
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
