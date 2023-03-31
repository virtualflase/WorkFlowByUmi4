import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright='安车监测'
    />
  );
};

export default Footer;
