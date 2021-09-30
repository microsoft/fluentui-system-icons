import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 7a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M19 7a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M21 19a2 2 0 11-4 0 2 2 0 014 0z" fill={primaryFill} /><path d="M5 21a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M7.83 6a3 3 0 000-2h4.67A2.5 2.5 0 0115 6.5V9h2.5a2.5 2.5 0 012.5 2.5v4.67a3 3 0 00-2 0V11.5a.5.5 0 00-.5-.5H15v1.5a2.5 2.5 0 01-2.5 2.5H11v2.5c0 .28.22.5.5.5h4.67a3 3 0 000 2H11.5A2.5 2.5 0 019 17.5V15H6.5A2.5 2.5 0 014 12.5V7.83a3 3 0 002 0v4.67c0 .28.22.5.5.5H9v-1.5A2.5 2.5 0 0111.5 9H13V6.5a.5.5 0 00-.5-.5H7.83zM13 12.5V11h-1.5a.5.5 0 00-.5.5V13h1.5a.5.5 0 00.5-.5z" fill={primaryFill} /></svg>;
}

const Group24Filled = wrapIcon(rawSvg({}), 'Group24Filled');
export default Group24Filled;
      