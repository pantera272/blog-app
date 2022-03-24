export const dateToString = dateValue => {

  const date = new Date(dateValue);
  const day = date.getDate();
  const month = date.getMonth()
  const year = date.getFullYear();

  return (month + 1) + '/' + day + '/' + year ;
}