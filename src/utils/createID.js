export const createID = () =>
  String(Math.floor(Math.random() * Math.floor(Math.random() * Date.now())));
