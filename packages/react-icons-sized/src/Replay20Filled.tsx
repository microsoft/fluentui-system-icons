import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.5v-3a.5.5 0 011 0v1.2a7.98 7.98 0 017.94-2.46A8 8 0 112 9.48a.5.5 0 111 .07A6.97 6.97 0 003 10a7 7 0 101.25-4H6a.5.5 0 010 1H3.5a.5.5 0 01-.5-.5zm4.5 1.47c0-.93.98-1.54 1.81-1.12l4.04 2.03c.92.47.92 1.77 0 2.24l-4.04 2.03a1.25 1.25 0 01-1.81-1.12V7.97z" fill={primaryFill} /></svg>;
}

const Replay20Filled = wrapIcon(rawSvg({}), 'Replay20Filled');
export default Replay20Filled;
      