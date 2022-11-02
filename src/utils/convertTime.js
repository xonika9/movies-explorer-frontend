function convertTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hours > 0) {
    return `${hours}ч ${mins}м`;
  } else {
    let ending;
    if (mins >= 11 && mins <= 14) {
      ending = 'минут';
    } else if (minutes % 10 === 1) {
      ending = 'минута';
    } else if (minutes % 10 >= 2 && minutes % 10 <= 4) {
      ending = 'минуты';
    } else {
      ending = 'минут';
    }
    return minutes + ' ' + ending;
  }
}

export { convertTime };
