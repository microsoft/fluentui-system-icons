import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6a1 1 0 011 1v11.59l1.3-1.3a1 1 0 011.31-.08l.1.08a1 1 0 01.08 1.32l-.08.1-3 3a1 1 0 01-1.32.08l-.1-.08-3-3a1 1 0 011.32-1.5l.1.08L11 18.6V7a1 1 0 011-1zm0-4a5 5 0 012 9.58v-1.7a3.5 3.5 0 10-4 0v1.7A5 5 0 0112 2z" fill={primaryFill} /></svg>;
}

const SwipeDown24Filled = wrapIcon(rawSvg({}), 'SwipeDown24Filled');
export default SwipeDown24Filled;
      