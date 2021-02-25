import Button from '../Button/Button'
import Header from '../Header/Header'

import Player from '../Player/Player'

export default function GamePage({
  nameOfGame,
  players,
  onPlus,
  onMinus,
  onReset,
  onEnd,
}) {
  return (
    <div>
      <Header> {nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <Button onClick={onReset}>Reset scores</Button>
      <Button onClick={onEnd}>End game</Button>
    </div>
  )
}
