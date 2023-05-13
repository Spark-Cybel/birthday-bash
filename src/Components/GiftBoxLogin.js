import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Frame from '../Frame.svg';

export default function GiftBoxLogin({ onLogin }) {

  const age = 10;
  const [animate, setAnimate] = useState(false);
  const [popUpCount, setPopUpCount] = useState(0);

  const updatePopUpCount = () => {
    setPopUpCount(popUpCount + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, [])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      opacity: animate ? 1 : 0,
      transition: 'opacity 2s',
    }}>
      <p style={{
        fontSize: '10vmin',
        fontWeight: 600,
        color: '#8A1242',
      }}>
        Tap Box to Open
      </p>
      <img src={Frame}
        style={{
          width: '100%',
        }}
        onClick={() => {
          let popUpTitle = 'Confirm Your Identity By Name'
          if (popUpCount === 2) popUpTitle = 'Now you have to do this 24 Times'
          if (popUpCount >= 4) popUpTitle = `Enter your Name (${age - popUpCount} remaining)`
          Swal.fire({
            title: popUpTitle,
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: (inputValue) => {
              if (inputValue.toLowerCase() !== 'juie') {
                Swal.showValidationMessage('Please put some more pressure on your KNEE and enter the correct name')
              }
            },
            allowOutsideClick: true
          }).then((result) => {
            updatePopUpCount();
            if (result.isConfirmed && popUpCount < age) {
              let errorString = 'Failed to save the data'
              if (popUpCount >= 1) errorString = 'Failed to save the data 😂😂😂'
              Swal.fire('Error !', errorString, 'error')
            } else if (result.isConfirmed && popUpCount >= age) {
              onLogin();
            }
          })
        }}
      />
    </div>
  )
}
