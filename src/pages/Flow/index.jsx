import { PageContainer } from '@ant-design/pro-components';
import { isEmpty } from 'lodash';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { NodeItemType, NodeTemplates, NodeTypes } from './components/Constants';
import EndNode from './components/End';
import MyDrawer from './components/MyDrawer';
import Render from './components/Render';
import SetApprover from './components/SetApprover';
import SetCondition from './components/SetCondition';
import ZoomLayout from './components/ZoomLayout';
import OpContext from './context/OperatorContext';
import './index.less';
import initConfig from './init.json';
const Flow = forwardRef((props, ref) => {
  const [config, setConfig] = useState(isEmpty(props.config) ? initConfig : props.config);
  const [currentNode, setCurrentNode] = useState({});
  const approverRef = useRef(null);
  const conditionRef = useRef(null);
  useImperativeHandle(ref, () => ({}));
  const updateNode = () => {
    setConfig({ ...config });
  };
  /** 处理添加审核人节点 */
  const handleAddApprover = (objRef) => {
    objRef.childNode = {
      ...NodeTemplates[NodeItemType.APPROVER],
      childNode: objRef.childNode,
    };
  };
  /** 处理添加抄送人节点 */
  const handleAddNotifier = (objRef) => {
    objRef.childNode = {
      ...NodeTemplates[NodeItemType.NOTIFIER],
      childNode: objRef.childNode,
    };
  };
  /** 处理添加条件分支节点 */
  const handleAddCondition = (objRef) => {
    objRef.childNode = {
      ...NodeTemplates[NodeItemType.CONDITION],
      conditionNodes: [
        {
          ...NodeTemplates[NodeItemType.BRANCH],
          nodeName: '条件1',
          childNode: objRef.childNode,
        },
        { ...NodeTemplates[NodeItemType.BRANCH], nodeName: '条件2' },
      ],
    };
  };

  /** 处理添加分支节点 */
  const handleAddBranch = (objRef) => {
    objRef.conditionNodes.push({ ...NodeTemplates[NodeTypes.BRANCH] });
  };

  /** 处理添加并行分支节点 */
  const handleAddConcurrent = (objRef) => {
    objRef.childNode = {
      ...NodeTemplates[NodeItemType.CONCURRENTS],
      conditionNodes: [
        {
          ...NodeTemplates[NodeItemType.BRANCH],
          nodeName: '分支2',
          childNode: objRef.childNode,
        },
        { ...NodeTemplates[NodeItemType.BRANCH], nodeName: '分支2' },
      ],
    };
  };

  const onAddNode = (type, pRef, objRef) => {
    // const o = objRef.childNode;
    console.log('onAddNode', type, objRef);
    const typeMap = {
      [NodeItemType.APPROVER]: handleAddApprover,
      [NodeItemType.NOTIFIER]: handleAddNotifier,
      [NodeItemType.CONDITION]: handleAddCondition,
      [NodeItemType.BRANCH]: handleAddBranch,
      [NodeItemType.CONCURRENTS]: handleAddConcurrent,
    };
    /** 执行节点插入 */
    typeMap[type]?.(objRef);
    updateNode();
  };

  const onDeleteNode = (pRef, objRef, type, index) => {
    if (window.confirm('是否删除节点？')) {
      if (type === NodeTypes.BRANCH) {
        console.log([...objRef.conditionNodes], index);
        objRef.conditionNodes.splice(index, 1);
        console.log(objRef.conditionNodes);
      } else {
        const newObj = objRef.childNode;
        pRef.childNode = newObj;
      }
      updateNode();
    }
  };

  // 获取节点
  const onSelectNode = (pRef, objRef) => {
    setCurrentNode(objRef);
  };

  // 打开审批人Drawer
  const handleOpenApproverDrawer = () => approverRef.current.openModal();
  const handleCloseApproverDrawer = () => approverRef.current.closeModal();
  const handleOpenConditionDrawer = () => conditionRef.current.openModal();
  const handleCloseConditionDrawer = () => conditionRef.current.closeModal();

  return (
    <PageContainer>
      <OpContext.Provider
        value={{
          config,
          currentNode,
          updateNode,
          onAddNode,
          onDeleteNode,
          onSelectNode,
          handleOpenApproverDrawer,
          handleCloseApproverDrawer,
          handleOpenConditionDrawer,
          handleCloseConditionDrawer,
        }}
      >
        <div className="dingflow-design">
          <ZoomLayout>
            <Render config={config} />
            <EndNode />
          </ZoomLayout>
        </div>

        <MyDrawer
          ref={approverRef}
          title={currentNode?.nodeName}
          contentWrapperStyle={{ width: '736px' }}
          closable={false}
        >
          <SetApprover />
        </MyDrawer>

        <MyDrawer
          ref={conditionRef}
          title="条件设置"
          contentWrapperStyle={{ width: '736px' }}
          closable={false}
        >
          <SetCondition formItems={props?.formItems || []} />
        </MyDrawer>
      </OpContext.Provider>
    </PageContainer>
  );
});

export default Flow;
