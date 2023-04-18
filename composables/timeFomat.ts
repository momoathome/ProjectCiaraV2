export function timeFormat(numberInSeconds: number) {
  const minutes = Math.floor(numberInSeconds / 60)
  const seconds = numberInSeconds % 60

  return `${timeFormatToDoubleDigit(minutes)}:${timeFormatToDoubleDigit(seconds)}`
}

// if timeNumber is a single digit like 10:0
// convert timeNumber to double digit like 10:00
function timeFormatToDoubleDigit(timeNumber: number) {
  return timeNumber.toString().padStart(2, '0')
}
