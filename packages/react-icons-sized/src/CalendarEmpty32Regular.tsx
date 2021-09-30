import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3A4.5 4.5 0 003 7.5v17A4.5 4.5 0 007.5 29h17a4.5 4.5 0 004.5-4.5v-17A4.5 4.5 0 0024.5 3h-17zM5 7.5A2.5 2.5 0 017.5 5h17A2.5 2.5 0 0127 7.5V9H5V7.5zM5 11h22v13.5a2.5 2.5 0 01-2.5 2.5h-17A2.5 2.5 0 015 24.5V11z" fill={primaryFill} /></svg>;
}

const CalendarEmpty32Regular = wrapIcon(rawSvg({}), 'CalendarEmpty32Regular');
export default CalendarEmpty32Regular;
      