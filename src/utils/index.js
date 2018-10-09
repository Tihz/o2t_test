export const round = (value, dec = 1) => Math.round(value * `1e${dec}`) / `1e${dec}`;
