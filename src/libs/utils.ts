export const getDiffTime = (time) => {
  const t = new Date(time).getTime();
  const now = new Date().getTime();
  const diff = now - t;
  return Math.floor(diff / 1000 / 60);
};
