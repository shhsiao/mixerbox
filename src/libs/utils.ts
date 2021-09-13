export const getFormatYear = (y: number): string => {
  let formatY = String(y);
  while (formatY.length < 4) {
    formatY = '0' + formatY;
  }
  return formatY;
};
export const getFormatMonth = (m: number): string => {
  const displayM = m + 1;
  let formatM = String(displayM);
  while (formatM.length < 2) {
    formatM = '0' + formatM;
  }
  return formatM;
};
export const getFormatDate = (d: number): string => {
  let formatD = String(d);
  while (formatD.length < 2) {
    formatD = '0' + formatD;
  }
  return formatD;
};
