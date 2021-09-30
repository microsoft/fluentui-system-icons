import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.5 7.5v3h5v-3h-5z" fill={primaryFill} /><path d="M8.75 1c.41 0 .75.34.75.75V3h7.25C17.99 3 19 4 19 5.25V14c0 .19-.07.37-.2.5l-1.3 1.42v3.83c0 1.24-1 2.25-2.25 2.25h-6.5c-1.24 0-2.25-1-2.25-2.25v-3.83L5.2 14.5A.75.75 0 015 14V5.25C5 4.01 6 3 7.25 3H8V1.75c0-.41.34-.75.75-.75zM8 6.75v4.5c0 .41.34.75.75.75h6.5c.41 0 .75-.34.75-.75v-4.5a.75.75 0 00-.75-.75h-6.5a.75.75 0 00-.75.75zm1.5 8c0 .41.34.75.75.75h3.5a.75.75 0 000-1.5h-3.5a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
}

const WalkieTalkie24Filled = wrapIcon(rawSvg({}), 'WalkieTalkie24Filled');
export default WalkieTalkie24Filled;
      