'use strict';

var React = require('react-native');
var TimeSelection = require('./App/Components/TimeSelection');
var TimerScreen = require('./App/Components/TimerScreen');
var TimerCompleteScreen = require('./App/Components/TimerCompleteScreen');
var Orientation = require('react-native-orientation');

var {
    AppRegistry,
    StyleSheet,
    Navigator,
    Component,
    BackAndroid
    } = React;

var _navigator;

//Orientation.lockToLandscape();

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.popToTop();
        return true;
    }
    return false;
});

var Router = function (route, navigationOperations, onComponentRef) {
    console.log("routing to: " + route.name);
    _navigator = navigationOperations;
    switch (route.name) {
        case 'TIME_SELECTION':
            return (
                <TimeSelection navigator={navigationOperations}/>
            );
        case 'TIMER_SCREEN':
            return (
                <TimerScreen navigator={navigationOperations} timerInfo={route.timerInfo}/>
            );
        case 'TIMER_COMPLETE_SCREEN':
            return (
                <TimerCompleteScreen navigator={navigationOperations}/>
            );
    }
}

class kidTimer extends Component {

    render() {
        return (
            <Navigator
                initialRoute={{name:'TIME_SELECTION'}}
                renderScene={Router}
                styles={styles.container}
            />
        );
    }
}
;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('kidTimer', () => kidTimer);
