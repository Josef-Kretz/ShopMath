import { useWindowDimension } from "./WindowDimenion";
import React from 'react'

const BgGen = ({limit=100}) => {
    // override colors here
    const colors = [
      "#577590",
      "#43aa8b",
      "#90be6d",
      "#f9c74f",
      "#f8961e",
      "#f3722c",
      "#f94144"
    ];
    const [width, height] = useWindowDimension()
    let boxes = []

    for(let i = 0;i < limit; ++i)
    {
        const boxHeight = Math.floor(0.1*height)+Math.floor(Math.random() * (height/limit))
        const boxWidth = Math.floor(0.1*width)+Math.floor(Math.random() * (width/limit))
        const boxColor = colors[Math.floor(Math.random() * colors.length)]

        let boxStyle = {
            height: `${boxHeight}px`,
            width: `${boxWidth}px`,
            top: `${Math.floor(Math.random() * (height-boxHeight))}px`,
            left: `${Math.floor(Math.random() * (width-boxWidth))}px`,
            backgroundColor: boxColor
        }

        boxes.push(React.createElement('div',{
            className: 'box',
            style: boxStyle
        }))
    }

    return React.createElement('div', {id:'bg'}, ...boxes)
  };

  export default BgGen