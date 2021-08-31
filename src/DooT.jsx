import useSound from 'use-sound';
import React from 'react';

function Doot(props) {

  const [musicToPlay, { stop, isPlaying }] = useSound(
    require("./data/mus/Doot - E1M1 [Knee-Deep in the Doot].mp3"),
    {
      volume: props.generalVolume,
      interrupt: true
    }
  );
  
  const handleMusicPlay = () => {
    if (isPlaying) {
      stop();
    } else {
      musicToPlay();
    }

  }

  return (
    <div style={{position: "absolute"}}>
       <button onClick={() => handleMusicPlay()}>DooT</button>
    </div>
  )
}

export default Doot;