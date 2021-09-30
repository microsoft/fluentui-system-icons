import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3a2.5 2.5 0 00-2.3 1.52l.3-.02A2 2 0 113 8.44v6.06A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9zM7 8.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 2.5h3a.5.5 0 010 1h-3a.5.5 0 010-1z" fill={primaryFill} /><path d="M3.5 5.5a1 1 0 00-1 1 1 1 0 101-1z" fill={primaryFill} /></svg>;
}

const Channel20Filled = wrapIcon(rawSvg({}), 'Channel20Filled');
export default Channel20Filled;
      