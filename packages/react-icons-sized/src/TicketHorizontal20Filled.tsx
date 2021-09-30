import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 6v1.5a.5.5 0 01-.5.5 2 2 0 100 4c.28 0 .5.22.5.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1v-1.5c0-.28.22-.5.5-.5a2 2 0 100-4 .5.5 0 01-.5-.5V6a1 1 0 011-1h14a1 1 0 011 1z" fill={primaryFill} /></svg>;
}

const TicketHorizontal20Filled = wrapIcon(rawSvg({}), 'TicketHorizontal20Filled');
export default TicketHorizontal20Filled;
      