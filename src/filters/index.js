function plucker(value, field) {
  if (!value) return "";
  return value[field];
}

function formatDate(value, format) {
  if (!value) return "";
  const newDate = new Date(value);
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  const fullYear = newDate.getFullYear();
  const shortYear = fullYear.toString().substr(-2);
  date = date.toString().length === 1 ? "0" + date : date;
  month = month.toString().length === 1 ? "0" + month : month;
  //TODO: You can modified date according to your need
  switch (format) {
    case "DD-MM-YY":
      return date + "-" + month + "-" + shortYear;
    case "DD/MM/YYYY":
      return date + "/" + month + "/" + fullYear;
    default:
      return newDate;
  }
}

export { plucker, formatDate };
