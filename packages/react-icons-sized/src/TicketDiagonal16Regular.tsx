import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.43 1.94a.6.6 0 00-.82.02L1.99 8.58a.6.6 0 000 .84l.93.93h.02a.2.2 0 00.1-.03 1.9 1.9 0 012.63 2.63.2.2 0 00-.02.11v.02l.9.9a.6.6 0 00.86 0l6.6-7.02a.6.6 0 00-.03-.85l-.88-.81h-.05c-.05 0-.1.04-.15.08a1.9 1.9 0 11-2.8-2.57c.04-.04.07-.1.07-.15v-.04l-.74-.68zM8.04 1.4a1.4 1.4 0 011.94-.04l.73.67c.22.2.28.48.26.71-.02.23-.12.46-.28.62a1.1 1.1 0 101.62 1.49c.16-.17.37-.29.6-.33.23-.04.5 0 .73.2l.88.81c.58.53.61 1.42.08 2l-6.6 7a1.4 1.4 0 01-2.01.03l-.9-.9c-.35-.35-.27-.85-.07-1.14a1.1 1.1 0 00-1.53-1.53c-.3.2-.8.28-1.14-.06l-.93-.93a1.4 1.4 0 010-1.98l6.62-6.62z" fill={primaryFill} /></svg>;
}

const TicketDiagonal16Regular = wrapIcon(rawSvg({}), 'TicketDiagonal16Regular');
export default TicketDiagonal16Regular;
      