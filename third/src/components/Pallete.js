
import { useState } from "react";
import transition from "../transition";

function Pallete(props) {

  String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

  const {colorArr, format, isSoundOn, styleClass} = props;
  const isTiny = styleClass === "tiny";
  const colors = colorArr.colors;

  const ColorItem = [];

  const [copiedColor, setCopiedColor] = useState("");
  const [isActive, setIsActive] = useState(false);
  const audio = new Audio("/src_notify.mp3");

  const handleColorClick = (color) => {
    if(isSoundOn) audio.play();

    let formattedColor = "";
    if (format === "HEX(AA1923)") {
      formattedColor = toHex(color);
    } else if (format === "RGB-(1,2,3)") {
      formattedColor = toRgb(color);
    } else if (format === "RGBA-(1,2,3,0.4)") {
      formattedColor = toRgba(color);
    } else {
      formattedColor = color;
    }
    
    navigator.clipboard.writeText(formattedColor);
    setCopiedColor(formattedColor);
    setIsActive(true);

    setTimeout(() => {
      setIsActive(false);
    }, 1500);
  };
  
  const toHex = (color) => {
    return(color.replace("#", ""))
  }
  
  const toRgb = (color) => {
    let red = parseInt(color[1] + color[2], 16);
    let green = parseInt(color[3] + color[4], 16);
    let blue = parseInt(color[5] + color[6], 16);
    let finalRGB = "rgb(" + red + ", " + green + ", " + blue + ")";
    return(finalRGB)
  }

  const toRgba = (color) => {
    let rgb = toRgb(color);
    console.log(rgb.length)
    return((rgb.splice(rgb.length - 1, 0, ",1.0")).splice(3, 0, "a"))
  }


  for(let i = 0; i < colors.length; i++){
    ColorItem.push(
        <div 
          key={i} 
          className={isTiny ? "tiny" : "large"} 
          style={{backgroundColor: `${colors[i].color}`}} 
          onClick={isTiny ? undefined : (() => handleColorClick(colors[i].color))}
        >
          {isTiny ? undefined : (
            <div>
              <button className="copy">Copy</button>
              <p>{colors[i].name.toUpperCase()}</p>
            </div>
          )}
        </div>
    );
  }




  return (
    <div className={isTiny ? `colorFrame` : ""}>
      <div className={`colorContainer ${isTiny ? "" : "colorContainerStraight"}`}>
        {ColorItem}
      </div>
      <div className={`colorFrameFooter ${isTiny ? "" : "colorFrameFooterLarge"}`}>
        <p className="palleteName">{colorArr.paletteName}</p>
        {isTiny ? <p className="palleteEmoji">{colorArr.emoji}</p> : undefined}
      </div>
      <div className={`copied ${isActive ? "active" : ""}`}  style={{backgroundColor: copiedColor}}>
        <p className="copyText">Copied</p>
        <p className="copyColor">{copiedColor}</p>
      </div>
    </div>
  );
}

export default transition(Pallete);
