import React, { useState } from 'react';

export default function ScreenItem({ onChange, data }) {
    const [ queue, setQueue ] = React.useState(0);
    console.log(data.length)
    const [ points, setPoints ] = useState(Array.from({ length: data.length }, () => []))
    const [ pointsSum, setPointsSum ] = useState(Array.from({ length: data.length }, () => 0))
    const [ balls, setBalls ] = useState(Array.from({ length: 15 }, (_, i) => i + 1));
    console.log(balls)

    function addPoints(playerIndex, point) {
        const newPoints = points;
        console.log(newPoints);
        newPoints[playerIndex] = [ ...newPoints[playerIndex], point ];
        setBalls(balls.filter(b => b !== point));
        setPoints(newPoints);
        setPointsSum(pointsSum.map((sum, index) => index === playerIndex ? sum + point : sum));

        if(pointsSum[playerIndex] + point >= 60) {
            alert(data[playerIndex] + " fitoi!");
        }
    }

    function deletePoints(playerIndex, ballIndex) {
        console.log("Fshirje")
        const newPoints = points;
        console.log(newPoints)
        newPoints[playerIndex] = newPoints[playerIndex].filter(p => p !== ballIndex);
        setBalls([ ...balls, ballIndex ].sort((a, b) => a - b));
        setPoints(newPoints);
    }


    return (
      <div>
          <h2>{data.map((player, index) => {
              return <React.Fragment key={index}>
                  <span key={player} style={{ marginRight: "8px" }}>{player}</span>
                  {data.indexOf(player) !== data.length - 1 && 'VS '}
              </React.Fragment>
          })}</h2>
          Le te luajme!

          <table>
              <thead>
              <tr>
                  <th>Merr Radhen</th>
                  <th>Lojtari</th>
                  <th>Piket</th>
                  <th>Bilat</th>
              </tr>
              </thead>
              <tbody>
              {data.map((player, index) => (
                <tr key={index}>
                    <td>
                        <button onClick={() => {
                            setQueue(index)
                        }}
                                className={queue == index ? "button-1" : "button-1 not-highlighted"}>{queue == index ? "Po gjuan: >>" : "Merr rradhen"}</button>
                    </td>
                    <td>{player}</td>
                    <td>{pointsSum[index]}</td>
                    <td>
                        {points[index].map((i) => <img onClick={() => {
                            queue == index && deletePoints(queue, i)
                        }} key={i + 1} src={"/assets/balls/" + `${i}.png`} alt="bila"
                                                       style={{ width: '20px', marginRight: '2px' }} />)}
                    </td>
                </tr>
              ))}
              </tbody>
          </table>
          <div>
              {balls.map((i) => (
                <React.Fragment key={i}>
                    {i % 5 === 0 && i !== 0 && <br />}
                    <img onClick={() => {
                        addPoints(queue, i)
                    }} src={"/assets/balls/" + `${i}.png`} alt="bila"
                         style={{ width: '50px', marginTop: '10px', marginRight: '10px' }} />
                </React.Fragment>
              ))}
          </div>
      </div>
    );
};