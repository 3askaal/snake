import React, { useContext, useEffect } from 'react'
import { Container, Wrapper, Button, Text, Spacer, Popup } from '3oilerplate'
import { Smile as SmileIcon, Frown as FrownIcon } from 'react-feather'
import { Controls, Map, Timer } from '../../components'
import { GameContext } from '../../context'
import { useKeyboardBindings } from '../../helpers/keyboard'
import ReactGA4 from 'react-ga4'

const PlayView = () => {
  const { onStartGame, gameOver, settings, changeDirection } = useContext(GameContext)

  useKeyboardBindings()

  useEffect(() => {
    onStartGame()

    ReactGA4.event({
      category: "actions",
      action: "game:start",
    });
  }, [settings?.mode])

  useEffect(() => {
    if (gameOver?.won) {
      ReactGA4.event({
        category: "actions",
        action: "game:won",
      });
    }

    if (gameOver?.won === false) {
      ReactGA4.event({
        category: "actions",
        action: "game:lost",
      });
    }
  }, [gameOver])

  return (
    <Wrapper>
      <Container s={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Spacer size="xl" s={{ display: 'flex', alignItems: 'center' }}>
          <Map />
          <Controls />
        </Spacer>
      </Container>
      { gameOver?.won && (
        <Popup
          actions={[
            <Button onClick={onStartGame}>Restart</Button>
          ]}
        >
          <Text s={{ width: '100%', textAlign: 'center' }}>
            You won! Click restart to play again.
          </Text>
        </Popup>
      ) }
    </Wrapper>
  )
}

export default PlayView
