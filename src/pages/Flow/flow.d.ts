import { NodeItemType } from './components/Constants';

/** 条件节点列表 */
export type BranchItem = {
  childNode: any;
  type: NodeItemType;
  nodeName: string;
  conditionNodes?: any[];
  nodeUserList?: unknown[];
  conditionList?: unknown[];
  error?: boolean;
};
