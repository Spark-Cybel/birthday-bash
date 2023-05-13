import React, { useEffect, useState } from 'react'
import './SplashScreen.css';
import CountDown from './CountDown';
import Swal from 'sweetalert2';
import Frame from '../Frame.svg';
import GiftBoxAnimation from './GiftBoxAnimation';
import GiftBoxLogin from './GiftBoxLogin';

function SplashScreen({ onComplete }) {
  const [showCountDownTimer, setShowCountDownTimer] = useState(true);
  const [showGiftBoxAnimation, setShowGiftBoxAnimation] = useState(false);
  const [showGiftBox, setShowGiftBox] = useState(false);

  return (
    <div style={{ backgroundColor: '#2D112A', height: '100vh' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '95vh',
      }}>
        {
          showGiftBox && (
            <GiftBoxLogin
              onLogin={onComplete}
            />
          )
        }
        {
          showGiftBoxAnimation && (
            <GiftBoxAnimation
              onComplete={() => {
                setShowGiftBox(true);
                setShowGiftBoxAnimation(false);
              }}
            />
          )
        }
        {
          showCountDownTimer && (
            <CountDown
              hoursMinSecs={{ hours: 0, minutes: 0, seconds: 4 }}
              onComplete={() => {
                setShowCountDownTimer(false);
                setShowGiftBoxAnimation(true);
              }}
            />
          )
        }
      </div>
    </div>
  );
}

export default SplashScreen;
