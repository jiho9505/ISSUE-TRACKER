export const delay = (time) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

export const getRandomColor = () => {
  const hexCode = Math.floor(Math.random() * 16777215).toString(16);
  const result = hexCode.padStart(6, '0');
  return result;
};
