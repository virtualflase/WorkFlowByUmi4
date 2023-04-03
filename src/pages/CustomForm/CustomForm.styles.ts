import { styled } from '@umijs/max';

export const CustomFromWrap = styled.section`
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    height: 800px;
    
`;
export const CFListWrap = styled.aside`
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
    width: 300px;
    padding: 0 10px;
    border: 1px solid #ecedef;
`;
export const CFListTitle = styled.aside`
    width: 100%;
    text-align: center;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 4px 0 rgb(17 31 44 / 4%);
    border: 1px solid #ecedef;
    margin: auto;
    padding: 4px 0;
    margin-top: 8px;
`;

export const CFComponentWrap = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    //margin-top: 20px;
    //padding: 0 20px;
    font-size: 12px;
    width: 100%;
    color: rgba(17, 31, 44, 0.85);
    & > p {
        margin: 12px 0;
        padding: 0 20px;
    }
    .drag {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-left: 20px;

        li {
            display: flex;
            align-items: center;

            justify-content: center;
            width: 124px;
            height: 38px;
            margin-bottom: 12px;
            text-align: center;
            background-color: #fff;
            border: 1px solid transparent;
            border-radius: 8px;
            cursor: grab;
            &:hover {
                color: ${({ theme }) => theme.primaryColor};
                border: 1px solid ${({ theme }) => theme.primaryColor};
            }

            i {
                margin: 0 12px;
            }
        }

        li:nth-child(odd) {
            margin-right: 8px;
        }
    }
    ::-webkit-scrollbar {
        width: 2px;
        height: 2px;
        background-color: #f8f8f8;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #f8f8f8;
        border-radius: 16px;
    }
`;
export const CFMainWrap = styled.main`
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding: 0;
    background-color: #feffff;
`;
export const CFFormParam = styled.main`
    text-align: center;
    font-size: 14px;
    color: #7a7a7a;
    overflow: auto;
    box-sizing: border-box;
    flex-shrink: 0;
    width: 300px;
`;
