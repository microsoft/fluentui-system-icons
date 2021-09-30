import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.3 7.5H4.5a.5.5 0 000 1h1.8l-.65.65a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5a.5.5 0 10-.7.7l.64.65zM12 13a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8zm-3-1H4a1 1 0 01-1-1V5a1 1 0 011-1h5v8z" fill={primaryFill} /></svg>;
}

const PanelRightContract16Filled = wrapIcon(rawSvg({}), 'PanelRightContract16Filled');
export default PanelRightContract16Filled;
      