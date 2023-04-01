import { styled } from '@umijs/max';

export const AddOptionsWrap = styled.div`
  width: 350px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const AddOptionsItemWrap = styled.div`
  display: flex;
  margin: 5px 5px;
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid #f8f9f9;
  background-color: #f8f9f9;
  border-radius: 10px;
  width: 130px;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    background-color: #fff;
    box-shadow: 0 0 8px 2px #d6d6d6;
  }
  span {
    margin-left: 10px;
  }
  svg {
    padding: 5px;
    font-size: 25px;
    border: 1px solid #dedfdf;
    border-radius: 14px;
  }
`;
