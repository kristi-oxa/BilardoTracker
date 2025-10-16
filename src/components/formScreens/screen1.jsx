export default function ScreenItem({ onChange }) {
    return (
      <div>
          <h3>Miresevini</h3>
          <span>Jepi numrin e lojtarëve.</span><br />
          <input onChange={(e) => {
              onChange(e)
          }} name="numberOfPlayers" className={"number-input"} type="number" min={2} max={10} defaultValue={2} />
      </div>
    );
};