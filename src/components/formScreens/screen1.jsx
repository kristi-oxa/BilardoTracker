export default function ScreenItem({ onChange }) {
    const maxPlayers = 4;
    const minPlayers = 2;

    const checkPlayers = (e)=>{
        const pointsEntered = e.target.value;
        if(pointsEntered > maxPlayers){
            alert(`Maksimumi i lojtarëve është ${maxPlayers}`);
            e.target.value = maxPlayers;
        }else if(pointsEntered!="" && pointsEntered < minPlayers){
             alert(`Minimumi i lojtarëve është ${minPlayers}`);
              e.target.value = minPlayers;
        }
    }
    return (
      <div>
          <h3>Miresevini</h3>
          <span>Jepi numrin e lojtarëve.</span><br />
          <input onChange={(e) => {
              checkPlayers(e); onChange(e);
          }} name="numberOfPlayers" className={"number-input"} type="number" min={2} max={10} defaultValue={2} />
      </div>
    );
};