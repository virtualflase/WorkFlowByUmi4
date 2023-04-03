import { styled } from '@umijs/max';
/** 添加浮窗包裹层 */
export const AddOptionsWrap = styled.div`
    width: 350px;
    display: grid;
    grid-template-columns: 50% 50%;
`;
/** 添加节点种类的实体包裹层 */
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

export const BranchNodeWrap = styled.div`
    min-height: 220px;
    display: inline-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-flex: 1;
`;

export const BranchNodeBoxWrap = styled.div`
    min-height: 220px;
    display: inline-flex;
    flex-direction: column;
    -webkit-box-flex: 1;

    padding-top: 30px;
    padding-right: 50px;
    padding-left: 50px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    position: relative;
`;
export const BranchNodeAutoJudge = styled.div`
    position: relative;
    width: 220px;
    min-height: 72px;
    background: #fff;
    border-radius: 4px;
    padding: 12px 8px 0 16px;

    cursor: pointer;
    .icon {
        margin-right: 6px;
        font-size: 14px;
        visibility: hidden;
    }
    .btn{
        visibility: hidden;
    }
    &:hover {
        .icon,
        .btn {
            visibility: visible;
        }
    }
    &:after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        border: 1px solid transparent;
        border-radius: 4px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
        transition: all 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
        content: '';
        pointer-events: none;
    }
    &:active::after,
    &:hover:after {
        border: 1px solid #3296fa;
        box-shadow: 0 0 6px 0 rgba(50, 150, 250, 0.3);
    }
`;
// #718dff
export const ConditionNodeTitleWrap = styled.div`
    position: relative;
    font-size: 12px;
    color: ${props => props.theme.conditionColor};
    text-align: left;
    line-height: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const ConcurrentNodeTitleWrap = styled.div`
    position: relative;
    font-size: 12px;
    color: ${props => props.theme.conCurrentColor};
    text-align: left;
    line-height: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const BranchNodeTitleWrap = styled.div`
    font-size: 14px;
    color: #191f25;
    text-align: left;
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .text {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        .placeholder {
            color: #bfbfbf;
        }
    }
`;
export const BranchNodeArrowWrap = styled.div`
    /* display: block; */
    display: flex;
    align-items: center;
    position: absolute;
    height: 100%;
    &:hover {
        background-color: #ececec;
    }
`;
export const BranchNodeArrowLeft = styled(BranchNodeArrowWrap)`
    left: 0;
    top: 0;
`;
export const BranchNodeArrowRight = styled(BranchNodeArrowWrap)`
    right: 0;
    top: 0;
`;
