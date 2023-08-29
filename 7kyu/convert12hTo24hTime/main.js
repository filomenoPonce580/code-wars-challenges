function to24hourtime(hour, minute, period) {
  if (period === "am" && hour === 12) {
    hour = 0;
  } else if (period === "pm" && hour !== 12) {
    hour += 12;
  }
  return hour.toString().padStart(2, "0") + minute.toString().padStart(2, "0");
}