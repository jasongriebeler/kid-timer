var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Component
} = React;

class TimeSelection extends Component {

  constructor(props){
    super(props);
    console.log("PROPS in TimeSelection");
    console.log(props);
    this.render = this.render.bind(this);
    this.state = {
      timerInfo:{
        greenTime: null,
        yellowTime: null,
        redTime: null
      }
    };
  }

  sendToTimer(event){
    console.log("button pushed");
    console.log("state info in time selection");
    console.log(this.state.timerInfo);
    this.props.navigator.push({
      name: 'TIMER',
      timerInfo: this.state.timerInfo
    });
  }

	render(){
		return (
			<View style={styles.container}>
				<Text>Time Selection</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({timerInfo: {greenTime: text}})}
            placeholder='Green Time'
          />
          <TouchableHighlight
          onPress={this.sendToTimer.bind(this)}
          underlayColor='transparent'>
            <Text>Submit</Text>
          </TouchableHighlight>
			</View>
		)
	}
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

module.exports = TimeSelection;
