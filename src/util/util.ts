export function dateToString(date: Date) {
  let year = date.getFullYear();
  let month = two(date.getMonth() + 1);
  let day = two(date.getDate());
  let hour = two(date.getHours());
  let min = two(date.getMinutes());
  let sec = two(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}
function two(value: number) {
  if (value < 10) {
    return `0${value}`;
  }
  return value.toString();
}