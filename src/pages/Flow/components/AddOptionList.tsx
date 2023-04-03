import {
  ApartmentOutlined,
  AuditOutlined,
  BarsOutlined,
  DingtalkOutlined,
} from '@ant-design/icons';
import { AddOptionsItemWrap, AddOptionsWrap } from '../flow.styles';
import { NodeItemType, NodeNames } from './Constants';
type TProps = {
  onOptionClick: (params: NodeItemType) => void;
};
function AddNodeList(props: TProps) {
  return (
    <AddOptionsWrap>
      {/* 添加审批人 */}
      <AddOptionsItemWrap onClick={() => props.onOptionClick(NodeItemType.APPROVER)}>
        <AuditOutlined style={{ color: '#ff943e', fontSize: '32px' }} />
        <span className="text">{NodeNames[NodeItemType.APPROVER]}</span>
      </AddOptionsItemWrap>
      {/* 添加抄送人 */}
      <AddOptionsItemWrap onClick={() => props.onOptionClick(NodeItemType.NOTIFIER)}>
        <DingtalkOutlined style={{ color: '#3296fa', fontSize: '32px' }} />
        <span className="text">{NodeNames[NodeItemType.NOTIFIER]}</span>
      </AddOptionsItemWrap>
      {/* 添加条件分支 */}
      <AddOptionsItemWrap onClick={() => props.onOptionClick(NodeItemType.CONDITION)}>
        <ApartmentOutlined style={{ color: '#15bc83', fontSize: '32px', borderRadius: '16px' }} />
        <span className="text">{NodeNames[NodeItemType.CONDITION]}</span>
      </AddOptionsItemWrap>
      {/* 添加并行分支 */}
      <AddOptionsItemWrap onClick={() => props.onOptionClick(NodeItemType.CONCURRENTS)}>
        <BarsOutlined style={{ color: '#3296fa', fontSize: '32px', borderRadius: '16px' }} />
        <span className="text">{NodeNames[NodeItemType.CONCURRENTS]}</span>
      </AddOptionsItemWrap>
    </AddOptionsWrap>
  );
}

export default AddNodeList;
