import { CellStatus } from '../types';

export const getSample1 = (): Array<Array<CellStatus>> => {
  const row: Array<CellStatus> = Array(8).fill(CellStatus.Empty);
  const temp: Array<Array<CellStatus>> = Array(8).fill(null);
  const rows = temp.map((_) => [...row]);
  rows[3][4] = CellStatus.Black;
  rows[4][3] = CellStatus.Black;
  rows[4][2] = CellStatus.Black;
  rows[3][3] = CellStatus.White;
  rows[4][4] = CellStatus.White;
  return rows;
};
