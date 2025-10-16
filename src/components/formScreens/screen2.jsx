export default function ScreenItem({ onChange, data }) {
    console.log("data:", data);
    return (
      <div>
          <img className={"classic-border-top"} src={"/src/assets/border.png"} />
          {/* Render `data` divs directly */}
          <form onSubmit={onChange}>
              {Array.from({ length: data }, (_, i) => (
                <div key={i} className="my-box">
                    <span>Lojtari {i + 1}</span><br />
                    <input onChange={(e) => {
                        onChange(e);
                    }} name={`player${i + 1}`} className={"text-input"} type="text"
                           placeholder={`Emri i lojtarit ${i + 1}`}  />
                </div>
              ))}
              <button type="submit" className={"button-1"}>Play</button>
          </form>
          <img className={"classic-border-bottom"} src={"/src/assets/border.png"} />
      </div>
    );
};