export const convertedDate = (date: Date) => {
  const dt = new Date(date);
  return dt.toDateString();
};
