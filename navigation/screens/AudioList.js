import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export class AudioList extends Component {
  render() {
    return (
      <View>
        <Text>AudioList</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default AudioList