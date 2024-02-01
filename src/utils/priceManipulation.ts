export function randomPriceFromInterval(min, max, decimals = 0) {
  if (!decimals)
    return (Math.random() * (max - min) + min);

  return Number(Math.random() * (max - min) + min).toFixed(decimals);
}

export function randomPercentage(min, max) {
  return Number(Math.random() * (max - min) + min).toFixed(2);
}
