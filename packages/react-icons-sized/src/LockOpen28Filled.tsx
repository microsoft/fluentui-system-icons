import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.29 2h.21a4.5 4.5 0 014.49 4.2.75.75 0 11-1.5.1 3 3 0 00-5.98.02l-.01.18v3h9.25c1.24 0 2.25 1 2.25 2.25v12C22 25 21 26 19.75 26H7.25C6 26 5 25 5 23.75v-12C5 10.51 6 9.5 7.25 9.5H9v-3A4.5 4.5 0 0113.29 2h.21-.21zm.21 14a1.62 1.62 0 100 3.25 1.62 1.62 0 000-3.25z" fill={primaryFill} /></svg>;
}

const LockOpen28Filled = wrapIcon(rawSvg({}), 'LockOpen28Filled');
export default LockOpen28Filled;
      