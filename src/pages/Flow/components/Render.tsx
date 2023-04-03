import React from 'react';
import MatchNode from './Node';
type TProps = {
  config: any;
  pRef?: any;
};
function Render({ config, pRef }: TProps) {
  return (
    <React.Fragment>
      <MatchNode pRef={pRef} config={config} />
      {config.childNode && <Render pRef={config} config={config.childNode} />}
    </React.Fragment>
  );
}

export default Render;
