import Icon from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Container, Draggable } from 'react-smooth-dnd';
import { baseComponents } from './BaseFormList';
import { CFComponentWrap, CFFormParam, CFListTitle, CFListWrap, CFMainWrap, CustomFromWrap } from './CustomForm.styles';

const CustomForm = (props: any) => {
    return (
        <PageContainer>
            <CustomFromWrap>
                <CFListWrap>
                    <CFListTitle>组件库</CFListTitle>
                    <Container
                        dragClass="form-ghost"
                        dropClass="form-ghost-drop"
                        onDrop={() => {}}
                        nonDragAreaSelector=".field"
                    >
                        {baseComponents.map((item, index) => {
                            return (
                                <CFComponentWrap className='form-ghost' key={item.name}>
                                    <p>{item.name}</p>
                                    <ul>
                                        <div className="drag">
                                            {item.components.map(cp => {
                                                return (
                                                    <Draggable key={cp.title}>
                                                        <li>
                                                            <Icon name={cp.icon} />
                                                            <span>{cp.title}</span>
                                                        </li>
                                                    </Draggable>
                                                );
                                            })}
                                        </div>
                                    </ul>
                                </CFComponentWrap>
                            );
                        })}
                    </Container>
                </CFListWrap>
                <CFMainWrap>表单内容</CFMainWrap>
                <CFFormParam>右侧详情区域</CFFormParam>
            </CustomFromWrap>
        </PageContainer>
    );
};

export default CustomForm;
