export const calculateTimeRemaining = (targetTime) => {
  const currentTime = new Date().getTime();
  const timeRemaining = targetTime - currentTime;

  if (timeRemaining <= 0) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return {
    hours,
    minutes,
    seconds
  };
}
