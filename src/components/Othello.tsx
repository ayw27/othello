import { useState } from 'react';
import styled from 'styled-components';
import { Cell } from './Cell';
import { CellStatus } from '../types';
import { reverse } from '../utils/othelloUtil';

const cells: Array<CellStatus> = Array<CellStatus>(8).fill(CellStatus.White);
const getInitialRows = (): Array<Array<CellStatus>> => {
  //一次元配列を生成
  const row: Array<CellStatus> = Array<CellStatus>(8).fill(CellStatus.Empty);
  const rows: Array<Array<CellStatus>> = [];
  for (let index = 0; index < 8; index++) {
    //生成した一次元配列のコピーを二次元配列に追加
    const newRow = [...row];
    rows.push(newRow);
  }

  rows[3][4] = CellStatus.Black;
  rows[4][3] = CellStatus.Black;
  rows[3][3] = CellStatus.White;
  rows[4][4] = CellStatus.White;

  return rows;
};

export const Othello = () => {
  const [isBlackTurn, setIsBlackTurn] = useState(true);
  const [rows, setRows] = useState(getInitialRows());

  const onClickCell = () => {
    const result = reverse();
    if (result === null) return;

    setRows(result);
    setIsBlackTurn(!isBlackTurn);
  };

  return (
    <>
      <SContainer>
        <div>
          {isBlackTurn ? '黒の番' : '白の番'}
          {rows.map((row, index) => {
            return (
              <SRow key={index}>
                {row.map((status, index) => {
                  return <Cell key={index} status={status} onClick={onClickCell} />;
                })}
              </SRow>
            );
          })}
        </div>
      </SContainer>
    </>
  );
};

const SRow = styled.div`
  display: flex;
`;

const SContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
