import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6.25c0-.97.78-1.75 1.75-1.75h4a.75.75 0 000-1.5h-4A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25v-4a.75.75 0 00-1.5 0v4c0 .97-.78 1.75-1.75 1.75H12v-4.75A2.75 2.75 0 009.25 12H4.5V6.25zm0 7.25h4.75c.69 0 1.25.56 1.25 1.25v4.75H6.25c-.97 0-1.75-.78-1.75-1.75V13.5zM13 3.75c0-.41.34-.75.75-.75h6.5c.41 0 .75.34.75.75v6.5a.75.75 0 01-1.5 0V5.56l-5.22 5.22a.75.75 0 01-1.06-1.06l5.22-5.22h-4.69a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const ExpandUpRight24Regular = wrapIcon(rawSvg({}), 'ExpandUpRight24Regular');
export default ExpandUpRight24Regular;
      