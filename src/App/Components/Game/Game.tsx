import React from "react";
import { IGame } from "../../interfaces/interfaces";

const Game = (props: IGame) => {

  return (
    <div className="sub-game-list" onClick={(e) => e.stopPropagation()}>
      <div className="sub-game-list__items" dangerouslySetInnerHTML={{__html: `${props.away.name}`}}/>
      <div className="sub-game-list__items" dangerouslySetInnerHTML={{__html: `${props.home.name}`}}/>
      <div className="sub-game-list__items" dangerouslySetInnerHTML={{__html: `${props.markets_count}`}}/>
      <div className="sub-game-list__items" dangerouslySetInnerHTML={{__html: `${props.match_info.score}`}}/>
    </div>
  )
}

export default Game;
