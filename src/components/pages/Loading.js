import React from 'react';
import * as LottiePlayer from "@lottiefiles/lottie-player";


function Loading(props) {
  return (
    <>
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://lottie.host/c404786e-2d84-4239-a092-5fa55366d5a7/DRPRrsgJH4.json"
        style={{ height: '78vh' }}
      />
    </>
  );
}

export default Loading;