import React, { useState } from "react";

import Tournament from "../Tournament/Tournament";
import { IRegion, ITournament } from "../../interfaces/interfaces";
import { TbTournament } from "react-icons/tb";


const Region = (props: IRegion) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div
      className="tournaments-list"
      onClick={(event) => {
        event.stopPropagation();
        setShow(!show);
      }}
    >
      {props.name}
      {show ?
        <div className="tournaments-list__items" onClick={e => e.stopPropagation()}>
          <div className="list-items__title">
            <TbTournament /> Tournaments
          </div>
          {props.tournaments.map((tournament: ITournament) => (
            <Tournament
              id={tournament.id}
              key={tournament.id}
              name={tournament.name}
              order={tournament.order}
              games={tournament.games}
            />
          ))}
        </div> : null
      }
    </div>
  )
}

export default Region;
