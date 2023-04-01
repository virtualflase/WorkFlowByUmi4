import ApproverNode from './Approver';
import ConditionNode from './ConditionNode';
import { NodeItemType } from './Constants';
import NotifierNode from './Notifier';
import StartNode from './Start';

const NodeMaps = {
  [NodeItemType.START]: StartNode,
  [NodeItemType.APPROVER]: ApproverNode,
  [NodeItemType.NOTIFIER]: NotifierNode,
  [NodeItemType.CONDITION]: ConditionNode,
  [NodeItemType.BRANCH]: <></>,
  [NodeItemType.CONCURRENTS]: ConditionNode,
};

const MatchNode = ({ config, pRef }: any) => {
  const Node = NodeMaps[config.type as NodeItemType] || null;
  return Node && <Node {...config} objRef={config} pRef={pRef} />;
};

export default MatchNode;
