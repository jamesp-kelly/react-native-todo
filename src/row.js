import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Switch } from 'react-native';

class Row extends Component {
  render() {
    const { text, complete, onComplete } = this.props;
    return (
      <View style={styles.container}>
        <Switch 
          value={complete}
          onValueChange={onComplete}  
        />
        <View style={styles.textWrap}>
          <Text style={[styles.text, complete && styles.complete]}>{text}</Text>
        </View>
      </View>
    );
  }
}

Row.PropTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 24,
    color: "#4d4d4d"
  },
  complete: {
    textDecorationLine: 'line-through'
  }
})

export default Row;