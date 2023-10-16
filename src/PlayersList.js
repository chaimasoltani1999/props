import React from 'react'
import Players from './Players'
import player from './player'
function PlayersList() {
  return (
    <div>
      {
        player.map(player=><Players pl={player}/>)
      }
    </div>
  )
}

export default PlayersList