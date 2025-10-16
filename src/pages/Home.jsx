import '/src/style/home.css'
import React, { useEffect, useMemo, useState } from "react";

import { Suspense } from "react";
import { Button } from "../components/buttons/button.jsx";

export function Home() {
    const [ screen, setScreen ] = useState(1);
    const [ numberOfPlayers, setNumberOfPlayers ] = useState(2);
    const [ updateStep, setUpdateStep ] = useState(0);
    const [ players, setPlayers ] = useState([""]);

    console.log(screen, updateStep, "NUMBER OF PLAYERS:", numberOfPlayers, players);

    const changeNumberOfPlayers = (e) => {
        setNumberOfPlayers(e.target.value);
    }

    const createPlayers = (e) => {
        e.preventDefault();
        console.log(e.target.elements)
        if(e.target.elements){
            const inputs = Array.from(e.target.elements)
              .filter(el => el.tagName === "INPUT") // only inputs
              .map((el, index) => el.value=="" ? "Player_"+(index+1) : el.value); // get their values
            console.log();
            console.log(inputs);
            if(!inputs.includes("")){
                setPlayers(inputs);
            }
            setScreen(3)
        }
    }

    useEffect(() => {
        if(updateStep === 0) return; // No change
        if(screen + updateStep < 1 || screen + updateStep > 3) return; // Out of bounds
        setScreen(screen + updateStep)
        setUpdateStep(0)
    }, [ updateStep, numberOfPlayers]);


    const ScreenItem = useMemo(() => {
        return React.lazy(() => import(`../components/formScreens/screen${screen}.jsx`));
    }, [ screen ]);

    return (
      <div>
          <div className={"modal"}>
              <img alt={"border"} className={"classic-border-top"} src={"/assets/border.png"} />
              <h2>
                  MBAJTESI I PIKEVE!
              </h2>


              <Suspense fallback={<div>Loading...</div>}>
                  <ScreenItem onChange={screen===1 ? changeNumberOfPlayers : createPlayers} data={screen==2 ? numberOfPlayers : players} />
              </Suspense>


              {screen > 1 &&
                <Button onClick={setUpdateStep} updateStep={-1} buttonId={"2"} buttonText={"Back"} />}

              {screen < 2 &&
                <Button onClick={setUpdateStep} updateStep={1} buttonId={"1"} buttonText={"Next"} />}

              <img alt={"border"} className={"classic-border-bottom"} src={"/assets/border.png"} />
          </div>
      </div>
    );
};