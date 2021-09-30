import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 11.17l.87-1a.5.5 0 01.76.66l-1.75 2a.5.5 0 01-.76 0l-1.75-2a.5.5 0 11.76-.65l.87 1V7.5a.5.5 0 111 0v3.67zM4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zM3 6a1 1 0 011-1h12a1 1 0 011 1v5h-3.83a1.5 1.5 0 01-.3.5l-.44.5H17v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2h4.57l-.45-.5a1.5 1.5 0 01-.29-.5H3V6z" fill={primaryFill} /></svg>;
}

const PanelBottomContract20Regular = wrapIcon(rawSvg({}), 'PanelBottomContract20Regular');
export default PanelBottomContract20Regular;
      