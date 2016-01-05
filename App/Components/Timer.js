var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Component
} = React;

class Timer extends Component{

  constructor(props){
    super(props);
    console.log("PROPS in Timer constructor");
    console.log(props);
  }
  render() {
    console.log("timer props in render");
    console.log(this.props);
    return (
      <View>
        <Text> Green: {this.props.timerInfo.greenTime}</Text>
      </View>
    );
  }
}

module.exports = Timer;
