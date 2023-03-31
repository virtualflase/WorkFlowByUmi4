import { styled } from '@umijs/max';

export const AddOptionsWrap = styled.div``;

export const AddOptionsItemWrap = styled.div`
  display: inline-block;
  margin: 5px 5px;
  cursor: pointer;
  padding: 10px 15px;
  border: 1px solid #f8f9f9;
  background-color: #f8f9f9;
  border-radius: 10px;
  width: 130px;
  position: relative;
  span {
    position: absolute;
    top: 18px;
    left: 65px;
  }
  &:hover {
    background-color: #fff;
    box-shadow: 0 0 8px 2px #d6d6d6;
  }
  i {
    padding: 5px;
    font-size: 25px;
    border: 1px solid #dedfdf;
    border-radius: 14px;
  }
`;
