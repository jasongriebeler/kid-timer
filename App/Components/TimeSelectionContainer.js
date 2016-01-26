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
        this.state = {}
        if(props.colorSelection)
            this.state.colorSelection = props.colorSelection;
        else
            this.state.colorSelection = 'green';

        if(props.timerInfo) {
            this.state.timerInfo = props.timerInfo
        } else {
            this.state.timerInfo = {
                timerInfo:{
                    greenTime: 0,
                    yellowTime: 0,
                    redTime: 0
                }
            };
        }
    }

    timeSelected(data){

        console.log("selected " + data.minutes + " for " + data.colorSelection);

        var timerInfo = data.timerInfo
        var route;
        var colorSelection;

        if(data.colorSelection == 'green') {
            timerInfo.greenTime = data.minutes;
            route = 'TIME_SELECTION_CONTAINER';
            colorSelection = 'yellow';
        }
        if(data.colorSelection == 'yellow') {
            timerInfo.yellowTime = data.minutes;
            route = 'TIME_SELECTION_CONTAINER';
            colorSelection='red';
        }
        if(data.colorSelection == 'red') {
            timerInfo.redTime = data.minutes
            route = 'TIMER_SCREEN';
        }

        data.navigator.push({
            name: route,
            timerInfo: timerInfo,
            colorSelection: colorSelection
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
                    colorSelection={this.state.colorSelection} />
            </View>
        )
    }
};

var styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems:'stretch',
        borderRadius: 4,
        borderWidth: 3,
        borderColor: 'yellow',
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
