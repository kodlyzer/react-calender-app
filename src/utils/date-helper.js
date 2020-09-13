export function getFormattedDate(dateObj, format="yyyymmdd") {
  if (!(dateObj instanceof Date)) return dateObj;
  const yyyy = dateObj?.getFullYear();
  const mm = dateObj?.getMonth() + 1;
  const dd = dateObj?.getDate();
  const dateWithoutSeparation = String(10000 * yyyy + 100 * mm + dd);
  let date

  switch(format) {
    case "yyyymmdd":
      date = dateWithoutSeparation.slice(0,4) + '-' + dateWithoutSeparation.slice(4,6) + '-' + dateWithoutSeparation.slice(6,8);
      break;

    case "ddmmyyyy":
      date = dateWithoutSeparation.slice(6,8) + '-' + dateWithoutSeparation.slice(4,6) + '-' + dateWithoutSeparation.slice(0,4) ;
      break;
  }

  return date == '--NaN' ? '' : date;
}