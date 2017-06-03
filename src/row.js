import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

class Row extends Component {
  render() {
    const { text, complete, onComplete, onRemove } = this.props;
    return (
      <View style={styles.container}>
        <Switch 
          value={complete}
          onValueChange={onComplete}  
        />
        <View style={styles.textWrap}>
          <Text style={[styles.text, complete && styles.complete]}>{text}</Text>
        </View>
        <TouchableOpacity onPress={onRemove}>
          <Text style={styles.destroy}>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Row.PropTypes = {
  text: PropTypes.string.isRequired,
  complete: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
  onRemove: PropTypes.func.onRemove
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 24,
    color: '#4d4d4d'
  },
  complete: {
    textDecorationLine: 'line-through'
  },
  destroy: {
    fontSize: 20,
    color: '#cc9a9a'
  }
})

export default Row;