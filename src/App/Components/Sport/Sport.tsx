import React, { useState } from "react";

import Region from "../Region/Region";
import { ISport, IRegion } from "../../interfaces/interfaces";
import {FaRegistered} from "react-icons/fa";


const Sport = (props: ISport) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div onClick={() => setShow(!show)} className="region-list">
      {props.name}
      {show ?
        <div className="region-list__items" onClick={e => e.stopPropagation()}>
          <div className="list-items__title">
            <FaRegistered /> Regions
          </div>
          {props.regions.map((region: IRegion) => (
            <Region
              id={region.id}
              key={region.id}
              name={region.name}
              order={region.order}
              tournaments={region.tournaments}
            />)
          )}
        </div> : null
      }
    </div>
  )
}

export default Sport;
