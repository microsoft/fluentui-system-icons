import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 11.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7zm-8-6a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zm2.5 0a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zm2.5 0a.5.5 0 00-1 0v5a.5.5 0 001 0v-5z" fill={primaryFill} /></svg>;
}

const Calendar3Day16Filled = wrapIcon(rawSvg({}), 'Calendar3Day16Filled');
export default Calendar3Day16Filled;
      