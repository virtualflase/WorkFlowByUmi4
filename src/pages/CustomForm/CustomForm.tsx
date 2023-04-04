import Icon from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { useState } from 'react';
import { Container, Draggable, OnDropCallback } from 'react-smooth-dnd';
import { baseComponents } from './BaseFormList';
import { CFComponentWrap, CFFormParam, CFListTitle, CFListWrap, CFMainWrap, CustomFromWrap } from './CustomForm.styles';

const CustomForm = (props: any) => {
    const [group, setGroup] = useState<any[]>(['1']);
    const handleFormDrop: OnDropCallback = params => {
        console.log('params', params);
    };
    return (
        <PageContainer>
            <CustomFromWrap>
                <CFListWrap>
                    <CFListTitle>组件库</CFListTitle>

                    {baseComponents.map((item, index) => {
                        return (
                            <CFComponentWrap key={item.name}>
                                <p>{item.name}</p>
                                <ul>
                                    <Container
                                        behaviour="copy"
                                        groupName="custormForm"
                                        getChildPayload={i => item.components[i]}
                                        onDrop={handleFormDrop}
                                    >
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
                                    </Container>
                                </ul>
                            </CFComponentWrap>
                        );
                    })}
                </CFListWrap>
                <CFMainWrap>
                    <Container
                        style={{ height: '100%' }}
                        groupName="custormForm"
                        getChildPayload={i => group[i]}
                        onDrop={handleFormDrop}
                    >
                        {group.map(item => (
                            <Draggable key={item}>
                                <li>测试区域</li>
                            </Draggable>
                        ))}
                    </Container>
                </CFMainWrap>
                <CFFormParam>右侧详情区域</CFFormParam>
            </CustomFromWrap>
        </PageContainer>
    );
};

export default CustomForm;
