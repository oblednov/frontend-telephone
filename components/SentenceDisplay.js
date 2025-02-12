import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'native-base'

const SentenceDisplay = (props) => {
  return (
    <Text style={styles.text}>
      {props.sentence}
    </Text>
  )
}

export default SentenceDisplay

const styles = StyleSheet.create({
  text: {
    fontSize: 24
  }
})
