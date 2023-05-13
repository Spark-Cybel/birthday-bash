import React, { useState } from 'react'
import Lottie from 'react-lottie';
import Frame from '../Frame.svg';
import animationData1 from '../lottie_json/11504-birthday.json';

export default function GiftBoxAnimation({ onComplete }) {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    setTimeout(() => {
      onComplete?.();
    }, 1000);
  };

  return (
    <div style={{
      position: 'relative',
      boxSizing: 'border-box',
      width: 'auto',
      height: '90vmin',
    }}>
      <Lottie
        options={{
          loop: false,
          autoplay: true,
          animationData: animationData1,
        }}
        style={{
          opacity: animationComplete ? 0 : 1,
          transition: 'opacity 1s',
        }}
        eventListeners={[
          {
            eventName: 'complete',
            callback: handleAnimationComplete,
          },
        ]}
      />
      {
        animationComplete && (
          <img src={Frame} style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }} alt="logo" />
        )
      }
    </div>
  )
}
