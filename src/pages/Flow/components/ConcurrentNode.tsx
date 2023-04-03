import { CloseCircleOutlined, CopyOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useCallback, useContext } from 'react';
import WFC from '../context/OperatorContext';
import { BranchItem } from '../flow';
import { BranchNodeWrap, BranchNodeBoxWrap, BranchNodeAutoJudge, BranchNodeArrowLeft, ConditionNodeTitleWrap, BranchNodeTitleWrap, BranchNodeArrowRight, ConcurrentNodeTitleWrap } from '../flow.styles';
import AddNode from './Add';
import { NodeTypes } from './Constants';
import Render from './Render';
/** 并行节点 */

function ConcurrentNode({ conditionNodes: branches = [] as BranchItem[], ...restProps }) {
    const { onAddNode, onDeleteNode, onSelectNode, handleOpenConditionDrawer, branchMove, copyBranch } = useContext(WFC);

    function CoverLine({ first = false, last = false }) {
        return (
            <React.Fragment>
                {first && <div className="top-left-cover-line"></div>}
                {first && <div className="bottom-left-cover-line"></div>}
                {last && <div className="top-right-cover-line"></div>}
                {last && <div className="bottom-right-cover-line"></div>}
            </React.Fragment>
        );
    }

    const BranchNode = useCallback((props: any) => {
        return (
            <BranchNodeWrap>
                <BranchNodeBoxWrap>
                    <BranchNodeAutoJudge onClick={() => props.onBranchClick(props.objRef)}>
                        {!props.first && (
                            <BranchNodeArrowLeft className="btn">
                                <LeftOutlined
                                    onClick={e => {
                                        e.stopPropagation();
                                        branchMove(branches, props.index, -1);
                                    }}
                                />
                            </BranchNodeArrowLeft>
                        )}
                        <ConcurrentNodeTitleWrap>
                            <span className="editable-title">{props.nodeName}</span>
                            <div>
                                <CopyOutlined
                                    className="icon"
                                    onClick={e => {
                                        e.stopPropagation();
                                        copyBranch(branches, props.index)
                                    }}
                                />
                                &nbsp;
                                <CloseCircleOutlined
                                    className="icon"
                                    onClick={e => {
                                        e.stopPropagation();
                                        props.delBranch();
                                    }}
                                />
                                &nbsp;
                            </div>
                        </ConcurrentNodeTitleWrap>
                        <BranchNodeTitleWrap>
                            <div className="text">
                                {props.owner ? props.owner : <span className="placeholder">请设置条件</span>}
                            </div>
                        </BranchNodeTitleWrap>
                        {!props.last && (
                            <BranchNodeArrowRight className="btn">
                                <RightOutlined
                                    onClick={e => {
                                        e.stopPropagation();
                                        branchMove(branches, props.index, 1);
                                    }}
                                />
                            </BranchNodeArrowRight>
                        )}
                    </BranchNodeAutoJudge>
                    <AddNode objRef={props.objRef} />
                </BranchNodeBoxWrap>
            </BranchNodeWrap>
        );
    }, []);
    function addBranch() {
        onAddNode(NodeTypes.BRANCH, restProps.pRef, restProps.objRef);
    }
    function delBranch(i) {
        if (branches.length === 2) {
            onDeleteNode(restProps.pRef, restProps.objRef);
            return;
        }
        console.log('delBranch(i)', i);
        onDeleteNode(restProps.pRef, restProps.objRef, NodeTypes.BRANCH, i);
    }
    const onBranchClick = (objRef: any) => {
        onSelectNode(restProps.objRef, objRef);
        handleOpenConditionDrawer();
    };
    if (!branches || !branches.length) return <></>;

    return (
        <div className="branch-wrap">
            <div className="branch-box-wrap">
                <div className="branch-box">
                    <button type="button" className="add-branch" onClick={addBranch}>
                        添加分支
                    </button>
                    {branches.map((item, index) => {
                        console.log('item', item);
                        return (
                            <div className="col-box" key={`colBox${item.nodeName}`}>
                                <BranchNode
                                    {...item}
                                    index={index}
                                    first={index === 0}
                                    onBranchClick={onBranchClick}
                                    delBranch={() => delBranch(index)}
                                    last={index === branches.length - 1}
                                    objRef={item}
                                />
                                {item.childNode && <Render pRef={item} config={item.childNode} />}
                                <CoverLine first={index === 0} last={index === branches.length - 1} />
                            </div>
                        );
                    })}
                </div>
                <AddNode objRef={restProps.objRef} />
            </div>
        </div>
    );
}

export default ConcurrentNode;
