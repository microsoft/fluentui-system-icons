import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 8.5v4h6v-4h-6z" fill={primaryFill} /><path d="M10.25 1c.41 0 .75.34.75.75V3.5h8.75c1.24 0 2.25 1 2.25 2.25V16c0 .18-.07.36-.19.5L20 18.54v4.71c0 1.24-1 2.25-2.25 2.25h-7.5c-1.24 0-2.25-1-2.25-2.25v-4.71L6.19 16.5A.75.75 0 016 16V5.75C6 4.51 7 3.5 8.25 3.5H9.5V1.75c0-.41.34-.75.75-.75zM9.5 7.75v5.5c0 .41.34.75.75.75h7.5c.41 0 .75-.34.75-.75v-5.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75zm1.5 9.5c0 .41.34.75.75.75h4.5a.75.75 0 000-1.5h-4.5a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
}

const WalkieTalkie28Filled = wrapIcon(rawSvg({}), 'WalkieTalkie28Filled');
export default WalkieTalkie28Filled;
      