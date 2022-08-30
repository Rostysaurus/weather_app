export const getTime = (timeZone) => {

  const date = new Date().toLocaleDateString("en-uk", {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: timeZone
  })
  return date
  // const hours = date.getHours()
  // const minutes = date.getMinutes()

  // return `${hours}:${minutes}`

  // const newDate = new Date;
  // return `${newDate.getHours(date)}:${newDate.getMinutes(date)}`
}
