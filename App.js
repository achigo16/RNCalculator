import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Calculator} from 'react-native-calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        <View style={style.textContainer}>
          <Text style={style.text}>{this.state.text}</Text>
        </View>
        <View style={style.flex1}>
          <Calculator
            style={style.flex1}
            hideDisplay
            onTextChange={text => this.setState({text})}
          />
        </View>
        <Text style={style.copyright}>
          Created by Adityawan Chandra (19552011236)
        </Text>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height: 200,
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'right',
    fontSize: 50,
    fontWeight: '600',
  },
  flex1: {
    flex: 1,
  },
  copyright: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '500',
    borderTopWidth: 0.5,
  },
});
