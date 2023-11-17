import React from 'react';
import * as LottiePlayer from "@lottiefiles/lottie-player";


function Loading(props) {
  return (
    <>
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://lottie.host/524cba8b-ecec-4489-8cf3-59cc8197ae10/ZuTjPIgN2L.json"
        style={{ height: '78vh' }}
      />
    </>
  );
}

export default Loading;