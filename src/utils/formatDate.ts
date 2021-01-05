const formatDate = (date: string): string => {
  const dateWithoutTime = date.split('T')[0];
  const [year, month, day] = dateWithoutTime.split('-');
  return `${day}/${month}/${year}`;
};

export default formatDate;
