import React, { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from '../lottie_json/45-countdown.json';

export default function CountDown({ hoursMinSecs, onComplete }) {
  const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
  const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
  const [showLastCountDown, setShowLastCountDown] = useState(false);

  const tick = () => {
    if (hrs === 0 && mins === 0 && secs <= 4) {
      setShowLastCountDown(true);
    } else if (mins === 0 && secs === 0) {
      setTime([hrs - 1, 59, 59]);
    } else if (secs === 0) {
      setTime([hrs, mins - 1, 59]);
    } else {
      setTime([hrs, mins, secs - 1]);
    }
  };

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return (
    <div>
      {
        showLastCountDown ? (
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            eventListeners={[
              {
                eventName: 'complete',
                callback: onComplete
              }
            ]}
            height={400}
            width={400}
          />
        ) : (
          <p style={{
            fontSize: '20vw',
            fontWeight: 600,
            color: '#8A1242'
          }}
          >{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p>
        )
      }
    </div>
  )
}
