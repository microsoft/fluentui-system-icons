import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2a1 1 0 01.94.66l2.88 7.92-1.1 2.8L9.2 12H4.79l-.85 2.34a1 1 0 01-1.88-.68l4-11A1 1 0 017 2zm-1.48 8h2.96L7 5.93 5.52 10z" fill={primaryFill} /><path d="M15.37 6.53a1 1 0 00-1.86 0l-5.36 13.5H8a1 1 0 100 2h3a1 1 0 000-2h-.7l.8-2.03h6.66l.8 2.02H18a1 1 0 000 2h3.01a1 1 0 000-2h-.3l-5.34-13.5zm1.6 9.47H11.9l2.54-6.39L16.97 16z" fill={primaryFill} /></svg>;
}

const TextFont24Filled = wrapIcon(rawSvg({}), 'TextFont24Filled');
export default TextFont24Filled;
      