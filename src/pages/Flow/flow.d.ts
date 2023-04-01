import { NodeItemType } from './components/Constants';

/** 条件节点列表 */
type BranchItem = {
  childNode: any[];
  type: NodeItemType;
  nodeName: string;
  conditionNodes: unknown[];
  nodeUserList: unknown[];
  conditionList: unknown[];
  error: boolean;
};
