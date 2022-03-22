export default function countCol(value: number) {
  const maxValue = 255;
  const totalCol = 15;

  const averageValue = Math.round((value * 100) / maxValue);

  const numberCol = Math.ceil((averageValue * totalCol) / 100);

  return numberCol === 0 ? 1 : numberCol;
}
