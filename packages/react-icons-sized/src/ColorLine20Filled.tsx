import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.24 2.54a2.26 2.26 0 00-3.07.13L6.21 8.66l-.11.12a1.5 1.5 0 00-.28.56l-.8 3.08-.01.08a.5.5 0 00.62.53l3.08-.76.16-.05c.2-.08.4-.2.55-.35l5.96-6 .12-.12c.72-.85.72-2.1 0-2.95l-.13-.14-.13-.12z" fill={primaryFill} /><path d="M4.1 12H4a2 2 0 00-2 2v2c0 1.1.9 2 2 2h12a2 2 0 002-2v-2a2 2 0 00-2-2h-5.3l-.57.57a2.5 2.5 0 01-.92.59H9.2l-.21.07-3.11.77A1.5 1.5 0 014 12.4v-.04l.04-.16.05-.21z" fill={primaryFill} /></svg>;
}

const ColorLine20Filled = wrapIcon(rawSvg({}), 'ColorLine20Filled');
export default ColorLine20Filled;
      