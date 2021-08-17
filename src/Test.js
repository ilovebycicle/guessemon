import useSound from 'use-sound';
import React, { useState } from 'react';

function Test() {

  const [musicToPlay] = useSound(
    require("./data/mus/Doot - E1M1 [Knee-Deep in the Doot].mp3"),
    {
      volume: 0.25,
      interrupt: true,
    }
  );

  return (
    <div style={{position: "absolute"}}>
       <button onClick={() => musicToPlay()}>DooT</button>
    </div>
  )
}

export default Test;