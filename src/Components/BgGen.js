const BgGen = (limit, parent) => {
    parent.innerHTML = "";
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
    const height = window.innerHeight
    const width = window.innerWidth

    for (let i = 0; i < limit; i++) {
      //box dimensions and placement
      const boxHeight = Math.floor(0.1*height)+Math.floor(Math.random() * (height/limit))
      const boxWidth = Math.floor(0.1*width)+Math.floor(Math.random() * (width/limit))
      const boxColor = colors[Math.floor(Math.random() * colors.length)]
      //adding/styling box to doc
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = boxColor;
      box.style.height = `${boxHeight}px`;
      box.style.width = `${boxWidth}px`;
      box.style.top = `${Math.floor(Math.random() * (height-boxHeight))}px`;
      box.style.left = `${Math.floor(Math.random() * (width-boxWidth))}px`;

      parent.appendChild(box);
    }
  };

  export default BgGen