import React, { useEffect, useState } from 'react';

import Sport from "./Components/Sport/Sport";
import { ISport } from "./interfaces/interfaces";
import { dataNormalizer } from "./utils/Helpers";
import { CgMenuGridR } from 'react-icons/cg';
import { FcSportsMode } from 'react-icons/fc';

import './App.scss';


function App () {
  const [data, setData] = useState<ISport[]>([]);
  const [show, setShow] = useState<boolean>(false);


  useEffect(() => {
    fetch("/Data/data.json", { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' }})
      .then((response: Response) => response.json())
      .then((data) => setData(dataNormalizer(data.data.data)));
  }, []);


  return (
    <div className="App">
      <div className="main-list-items__title" onClick={() => setShow(!show)}>
        <CgMenuGridR /> List of Sports Type
      </div>
      <div className="sports-list">
        {show ?
          <div className="sports-list__items">
            <div className="list-items__title">
              <FcSportsMode /> Sports
            </div>
            {data.map((sport: ISport) => (
              <Sport
                id={sport.id}
                key = {sport.id}
                name={sport.name}
                order={sport.order}
                regions={sport.regions}
              />))
            }
          </div> : null
        }
      </div>
    </div>
  );
}

export default App;
