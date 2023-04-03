import { PlusCircleFilled } from '@ant-design/icons';
import { Popover } from 'antd';
import { useCallback, useContext, useMemo } from 'react';
import WFC from '../context/OperatorContext';
import AddNodeList from './AddOptionList';
import { NodeItemType } from './Constants';

type TProps = {
  pRef?: any;
  objRef?: any;
};
function AddNode(props: TProps) {
  const { onAddNode } = useContext(WFC);
  const onOptionClick = useCallback(
    (type: NodeItemType) => {
      console.log('onOptionClick', type);
      onAddNode(type, props.pRef, props.objRef);
    },
    [onAddNode],
  );

  const addNodeList = useMemo(() => <AddNodeList onOptionClick={onOptionClick} />, [onOptionClick]);

  return (
    <div className="add-node-btn-box">
      <div className="add-node-btn">
        <Popover placement="right" title="添加流程节点" content={addNodeList} trigger="click">
          <PlusCircleFilled style={{ color: '#3296fa', fontSize: '32px' }} className="add-icon" />
        </Popover>
      </div>
    </div>
  );
}

export default AddNode;
