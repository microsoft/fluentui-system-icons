import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 5C3.01 5 2 6 2 7.25v13.5C2 21.99 3 23 4.25 23h19.5c1.24 0 2.25-1 2.25-2.25V7.25C26 6.01 25 5 23.75 5H4.25zm10.28 3.84l3.25 3.26a.75.75 0 01-1.06 1.06l-1.97-1.98v7.45a.75.75 0 01-1.5 0v-7.45l-1.97 1.98a.75.75 0 11-1.06-1.06l3.25-3.26a.75.75 0 011.06 0z" fill={primaryFill} /></svg>;
}

const ShareScreenStart28Filled = wrapIcon(rawSvg({}), 'ShareScreenStart28Filled');
export default ShareScreenStart28Filled;
      