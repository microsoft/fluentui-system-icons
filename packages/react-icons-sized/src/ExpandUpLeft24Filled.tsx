import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 3.75a.75.75 0 00-.75-.75h-6.5a.75.75 0 00-.75.75v6.5a.75.75 0 001.5 0V5.56l5.22 5.22a.75.75 0 001.06-1.06L5.56 4.5h4.7c.4 0 .74-.34.74-.75zm6.75.75c.97 0 1.75.78 1.75 1.75V12h-4.75A2.75 2.75 0 0012 14.75v4.75H6.25c-.97 0-1.75-.78-1.75-1.75v-4a.75.75 0 00-1.5 0v4C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.55 3 17.75 3h-4a.75.75 0 100 1.5h4z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft24Filled = wrapIcon(rawSvg({}), 'ExpandUpLeft24Filled');
export default ExpandUpLeft24Filled;
      