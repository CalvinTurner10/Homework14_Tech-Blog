module.exports = {
  format_date: date => {
 return date.tolocalDateString();
  },
  format_amount:(amount) => {
    return parseInt(amount).toLocaleString();
  },
};
