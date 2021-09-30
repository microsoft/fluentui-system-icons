import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.98 1.35a1.4 1.4 0 00-1.94.04L1.42 8.01a1.4 1.4 0 000 1.98l.93.93c.35.34.85.26 1.14.06a1.1 1.1 0 011.53 1.53c-.2.3-.28.8.06 1.14l.9.9A1.4 1.4 0 008 14.52l6.6-7a1.4 1.4 0 00-.08-2l-.88-.81a.84.84 0 00-.73-.2c-.23.04-.44.16-.6.33a1.1 1.1 0 11-1.62-1.49c.16-.16.26-.39.28-.62a.84.84 0 00-.26-.7l-.73-.68z" fill={primaryFill} /></svg>;
}

const TicketDiagonal16Filled = wrapIcon(rawSvg({}), 'TicketDiagonal16Filled');
export default TicketDiagonal16Filled;
      