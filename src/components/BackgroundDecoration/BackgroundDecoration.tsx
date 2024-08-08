import "./BackgroundDecorationStyle.scss";

export const BackgroundDecoration = () => {
  const backgroundDeco = [
    "WMF",
    "WMF",
    "WMF",
    "WMF",
    "WMF",
    "WMF",
    "WMF",
    "WMF",
  ];
  return (
    <div className="lines">
      <div className="line-1">
        <div className="decos">
          {backgroundDeco.map((deco, index) => (
            <div key={index} className="deco">
              {deco}
            </div>
          ))}
        </div>
      </div>
      <div className="line-2">
        <div className="decos">
          {backgroundDeco.map((deco, index) => (
            <div key={index} className="deco">
              {deco}
            </div>
          ))}
        </div>
      </div>
      <div className="line-3">
        <div className="decos">
          {backgroundDeco.map((deco, index) => (
            <div key={index} className="deco">
              {deco}
            </div>
          ))}
        </div>
      </div>
      <div className="line-4">
        <div className="decos">
          {backgroundDeco.map((deco, index) => (
            <div key={index} className="deco">
              {deco}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
