import styled from 'styled-components';
import { CellStatus } from '../types';

type Props = {
  status: CellStatus;
  onClick: () => void;
};

export const Cell = (props: Props) => {
  const { status, onClick } = props;
  return (
    <>
      <SCell onClick={onClick}>
        {status === CellStatus.White ? <SWhitePiece /> : status === CellStatus.Black ? <SBlackPiece /> : null}
      </SCell>
    </>
  );
};

const SCell = styled.div`
  width: 50px;
  height: 50px;
  background-color: #008000;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d3d3d3;
`;

const SBlackPiece = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: black;
`;

const SWhitePiece = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
`;
