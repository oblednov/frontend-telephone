import React from 'react'
import {
  StyleSheet
} from 'react-native'
import {
  Button,
  Text,
  Container
} from 'native-base'

const HomeScreen = (props) => {
  const startGame = () => {
    props.navigation.navigate('StartGame')
  }

  const showPastGames = () => {
    props.navigation.navigate('PastGames')
  }

  const showRules = () => {
    props.navigation.navigate('Rules')
  }

  return (
    <Container style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Telephone!</Text>
      <Button block success onPress={startGame}>
        <Text>
          Start New Game
        </Text>
      </Button>
      <Button block primary onPress={showPastGames}>
        <Text>
          Past Games
        </Text>
      </Button>
      <Button block info onPress={showRules}>
        <Text>
          Rules
        </Text>
      </Button>
    </Container>
  )
}

export default HomeScreen

HomeScreen.navigationOptions = {
  title: 'Welcome!'
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 15
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeText: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    margin: 10
  }
})
