import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3a2.5 2.5 0 00-2.3 1.52l.3-.02A2 2 0 113 8.44v6.06A2.5 2.5 0 005.5 17h4.1a5.48 5.48 0 010-5H7.5a.5.5 0 010-1h2.76A5.49 5.49 0 0117 9.6V5.5A2.5 2.5 0 0014.5 3h-9zM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.5 5.5a1 1 0 00-1 1 1 1 0 101-1z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" fill={primaryFill} /></svg>;
}

const ChannelAdd20Filled = wrapIcon(rawSvg({}), 'ChannelAdd20Filled');
export default ChannelAdd20Filled;
      