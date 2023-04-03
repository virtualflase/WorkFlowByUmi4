import ApproverNode from './Approver';
import ConcurrentNode from './ConcurrentNode';
import ConditionNode from './ConditionNode';
import { NodeItemType } from './Constants';
import NotifierNode from './Notifier';
import StartNode from './Start';

const NodeMaps: Record<NodeItemType, (props: any) => JSX.Element> = {
    [NodeItemType.START]: StartNode,
    [NodeItemType.APPROVER]: ApproverNode,
    [NodeItemType.NOTIFIER]: NotifierNode,
    [NodeItemType.CONDITION]: ConditionNode,
    [NodeItemType.BRANCH]: StartNode,
    [NodeItemType.CONCURRENTS]: ConcurrentNode,
};

const MatchNode = ({ config, pRef }: any) => {
    const Node = NodeMaps[config.type as NodeItemType];
    return !!Node && <Node {...config} objRef={config} pRef={pRef} />;
};

export default MatchNode;
