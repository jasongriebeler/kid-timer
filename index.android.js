'use strict';

var React = require('react-native');
var TimeSelection = require('./App/Components/TimeSelection');
var Timer = require('./App/Components/Timer');
var Orientation = require('react-native-orientation');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Component
} = React;

var Router = function(route, navigationOperations, onComponentRef){
  console.log("routing to: " + route.name);
  switch (route.name) {
    case 'TIME_SELECTION':
      return (
        <TimeSelection navigator={navigationOperations} />
      );
    case 'TIMER':
      return (
        <Timer navigator={navigationOperations} timerInfo={route.timerInfo} />
      )
  }
}

class kidTimer extends Component{

  render() {
    return (
      <Navigator
        initialRoute={{name:'TIME_SELECTION'}}
        renderScene={Router}
        styles={styles.container}
      />
    );
  }
};

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
