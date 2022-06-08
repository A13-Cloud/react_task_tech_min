import React, { useState } from "react";

import Game from "../Game/Game"
import { IGame, ITournament } from "../../interfaces/interfaces";
import { GrGamepad } from "react-icons/gr";


const Tournament = (props: ITournament) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="game-list" onClick={(event) => {
      event.stopPropagation();
      setShow(!show);
    }}>
      {props.name}
      {show ?
        <div className="game-list__items" onClick={e => e.stopPropagation()}>
          <div className="list-items__title">
            <GrGamepad/> Games
          </div>
          {props.games.map((game: IGame) => (
            <Game
              _id={game._id}
              key = {game._id}
              home={game.home}
              away={game.away}
              match_info={game.match_info}
              markets_count={game.markets_count}
            />
          ))}
        </div> : null
      }
    </div>
  )
}

export default Tournament;
