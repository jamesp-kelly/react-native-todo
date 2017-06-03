import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput } from 'react-native';

class Row extends Component {
  render() {
    const { text, complete, onComplete, onRemove, onToggleEdit, editing } = this.props;

    const textComponent = (
      <TouchableOpacity style={styles.textWrap} onLongPress={() => onToggleEdit(true) }>
        <Text style={[styles.text, complete && styles.complete]}>{text}</Text>
      </TouchableOpacity>
    );

    const removeButton = (
      <TouchableOpacity onPress={onRemove}>
        <Text style={styles.destroy}>X</Text>
      </TouchableOpacity>
    );

    const editingComponent = (
      <View style={styles.textWrap}>
        <TextInput 
          onChangeText={this.props.onUpdate}
          autoFocus
          value={this.props.text}
          style={styles.input}
          multiline
        />
      </View>
    );

    const doneButton = (
      <TouchableOpacity style={styles.done} onPress={() => this.props.onToggleEdit(false)}>
        <Text style={styles.doneText}>Save</Text>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Switch 
          value={complete}
          onValueChange={onComplete}  
        />

        {editing ? editingComponent : textComponent}
        {editing ? doneButton : removeButton}

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
  input: {
    height: 100,
    flex: 1,
    fontSize: 24,
    padding: 0,
    color: '#4d4d4d'
  },
  done: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7be290',
    padding: 7
  },
  doneText: {
    color: '#4d4d4d',
    fontSize: 20
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