var React = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight
} = React;

class TimeSelection extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      greenTime: "Green",
      yellowTime: "Yellow",
      redTime: "Red"
    }
  }

  onButtonPress(event){
    console.log(event);
  }

	render(){
		return (
			<View style={styles.container}>
				<Text>Time Selection</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({greenTime: text})}
          value={this.state.greenTime}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.yellowTime}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.redTime}
        />
      <TouchableHighlight onPress={this.onButtonPress}>
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
