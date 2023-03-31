import {
  ApartmentOutlined,
  AuditOutlined,
  BarsOutlined,
  DingtalkOutlined,
} from '@ant-design/icons';
import { AddOptionsItemWrap } from '../flow.styled';
import { OptionNames, OptionTypes } from './Constants';
type TProps = {
  onOptionClick: (params: OptionTypes) => void;
};
function AddNodeList(props: TProps) {
  return (
    <div>
      {/* 添加审批人 */}
      <AddOptionsItemWrap>
        <div className="wrap">
          <AuditOutlined
            style={{ color: '#ff943e', fontSize: '32px' }}
            onClick={() => props.onOptionClick(OptionTypes.APPROVER)}
          />
        </div>
        <span className="text">{OptionNames[OptionTypes.APPROVER]}</span>
      </AddOptionsItemWrap>
      {/* 添加抄送人 */}
      <AddOptionsItemWrap>
        <div className="wrap">
          <DingtalkOutlined
            style={{ color: '#3296fa', fontSize: '32px' }}
            onClick={() => props.onOptionClick(OptionTypes.NOTIFIER)}
          />
        </div>
        <span className="text">{OptionNames[OptionTypes.NOTIFIER]}</span>
      </AddOptionsItemWrap>
      {/* 添加条件分支 */}
      <AddOptionsItemWrap>
        <div className="wrap">
          <ApartmentOutlined
            style={{ color: '#15bc83', fontSize: '32px', borderRadius: '16px' }}
            onClick={() => props.onOptionClick(OptionTypes.CONDITION)}
          />
        </div>
        <span className="text">{OptionNames[OptionTypes.CONDITION]}</span>
      </AddOptionsItemWrap>
      {/* 添加并行分支 */}
      <AddOptionsItemWrap>
        <div className="wrap">
          <BarsOutlined
            style={{ color: '#3296fa', fontSize: '32px', borderRadius: '16px' }}
            onClick={() => props.onOptionClick(OptionTypes.CONCURRENTS)}
          />
        </div>
        <span className="text">{OptionNames[OptionTypes.CONCURRENTS]}</span>
      </AddOptionsItemWrap>
    </div>
  );
}

export default AddNodeList;
