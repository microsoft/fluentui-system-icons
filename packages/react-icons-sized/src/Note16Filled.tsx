import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V8h-3.5A2.5 2.5 0 008 10.5V14H4.5A2.5 2.5 0 012 11.5v-7zm7 9.36c.35-.12.67-.32.94-.6l3.33-3.32c.27-.27.47-.59.59-.94H10.5C9.67 9 9 9.67 9 10.5v3.36z" fill={primaryFill} /></svg>;
}

const Note16Filled = wrapIcon(rawSvg({}), 'Note16Filled');
export default Note16Filled;
      