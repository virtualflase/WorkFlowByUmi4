// 添加节点类型
// export const OptionTypes = {
//     APPROVER: 1,
//     NOTIFIER: 2,
//     BRANCH: 3,
//     CONDITION: 4,
//     CONCURRENTS: 5,
// }
/** 实际的节点类型 */
export enum NodeItemType {
  /** 开始节点 */
  START = 0,
  /** 审核人节点 */
  APPROVER = 1,
  /** 抄送人节点 */
  NOTIFIER = 2,
  /** 添加条件节点 */
  BRANCH = 3,
  /** 条件分支节点 */
  CONDITION = 4,
  /** 并行分支节点 */
  CONCURRENTS = 5,
}
export const NodeTypes = { ...NodeItemType, START: 0 };
// 节点类型默认标题名
export const NodeNames = {
  [NodeItemType.APPROVER]: '审批人',
  [NodeItemType.NOTIFIER]: '抄送人',
  [NodeItemType.CONDITION]: '条件分支',
  [NodeItemType.CONCURRENTS]: '并行条件',
};
// 节点模板
export const NodeTemplates = {
  [NodeItemType.APPROVER]: {
    nodeName: '审核人',
    error: true,
    type: NodeItemType.APPROVER,
    settype: 1,
    selectMode: 0,
    selectRange: 0,
    directorLevel: 1,
    replaceByUp: 0,
    examineMode: 1,
    noHanderAction: 1,
    examineEndDirectorLevel: 0,
    nodeUserList: [],
  },
  [NodeItemType.NOTIFIER]: {
    nodeName: '抄送人',
    type: NodeItemType.NOTIFIER,
    ccSelfSelectFlag: 1,
    nodeUserList: [],
  },
  [NodeItemType.CONDITION]: {
    nodeName: '路由',
    type: NodeItemType.CONDITION,
    childNode: null,
    conditionNodes: [],
  },
  [NodeItemType.BRANCH]: {
    nodeName: '条件1',
    type: NodeItemType.BRANCH,
    priorityLevel: 2,
    conditionList: {},
    nodeUserList: [],
    childNode: null,
  },
  [NodeItemType.CONCURRENTS]: {
    nodeName: '分支',
    type: NodeItemType.CONCURRENTS,
    childNode: null,
    conditionNodes: [],
  },
};
