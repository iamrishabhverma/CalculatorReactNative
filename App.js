import React, { Component } from 'react';
import { View, TextInput, Button, StatusBar, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Num1: 0, Num2: 0 };
  }

  Sum = () => {
    var N1 = parseInt(this.state.Num1);
    var N2 = parseInt(this.state.Num2);
    var R = N1 + N2;
    this.Result.value = R;
  }

  Subtract = () => {
    var N1 = this.state.Num1;
    var N2 = this.state.Num2;

    var R = N1 - N2;
    this.Result.value = R;
  }

  Divide = () => {
    var N1 = this.state.Num1;
    var N2 = this.state.Num2;

    var R = N1 / N2;
    this.Result.value = R;
  }

  Multiply = () => {
    var N1 = this.state.Num1;
    var N2 = this.state.Num2;

    var R = N1 * N2;
    this.Result.value = R;
  }
  clear = () => {

    this.Num1.clear();
    this.Num2.clear();
    this.Result.clear();
  }
  render() {
    return (
      <View style={styles.container}>
        <View title="Calculator">Calculator</View>
        <TextInput style={{ borderWidth: 1, margin: 10 }} placeholder="Num1" ref={Num1 => { this.Num1 = Num1 }} onChangeText={Num1 => this.setState({ Num1 })} />
        <TextInput style={{ borderWidth: 1, margin: 10 }} placeholder="Num2" ref={Num2 => { this.Num2 = Num2 }} onChangeText={Num2 => this.setState({ Num2 })} />
        <TextInput style={{ borderWidth: 1, margin: 10 }} placeholder="Result" ref={Result => { this.Result = Result }} onChangeText={Result => this.setState({ Result })} />
        <View style={{ flex: 1, flexDirection: 'row',backgroundColor: 'white' }}>
          <Button title="Sum" onPress={this.Sum} />
          <Button title="Subtract" onPress={this.Subtract} />
          <Button title="Divide" onPress={this.Divide} />
          <Button title="Multiply" onPress={this.Multiply} />
        </View>
        <Button title="Clear" onPress={this.clear} />
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    backgroundColor: '#E8EAF4',
    justifyContent: 'center',
    alignItems: 'center',
  },


});
