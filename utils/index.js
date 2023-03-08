function formatDate(dateString) {
  const date = new Date(dateString);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate().toString().padStart(2, '0'); // add prefix 0 to single-digit days
  let hour = date.getHours();
  const minute = date.getMinutes();
  const amOrPm = hour < 12 ? 'am' : 'pm';
  if (hour > 12) {
    hour -= 12;
  }
  const formattedDate = `${month} ${day}, ${hour}.${minute.toString().padStart(2, '0')}${amOrPm}`;
  return formattedDate;
}

export { formatDate };
