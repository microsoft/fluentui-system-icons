import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.6 2.53a2.25 2.25 0 00-3.2 0l-9.87 9.88c-.88.88-.88 2.3 0 3.18l1.17 1.17c.51.51 1.23.42 1.66.16a1.25 1.25 0 011.71 1.71c-.25.44-.34 1.16.17 1.67l1.17 1.17c.88.88 2.3.88 3.18 0l9.88-9.88c.88-.88.88-2.3 0-3.18L20.3 7.24c-.51-.51-1.23-.42-1.66-.16a1.25 1.25 0 01-1.71-1.71c.25-.44.34-1.16-.17-1.67L15.6 2.53z" fill={primaryFill} /></svg>;
}

const TicketDiagonal24Filled = wrapIcon(rawSvg({}), 'TicketDiagonal24Filled');
export default TicketDiagonal24Filled;
      