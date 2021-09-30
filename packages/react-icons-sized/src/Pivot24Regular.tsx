import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6.25c0-.97.78-1.75 1.75-1.75h11c.97 0 1.75.78 1.75 1.75v4.63a2.25 2.25 0 011.5 0V6.25c0-1.8-1.46-3.25-3.25-3.25h-11A3.25 3.25 0 003 6.25v11c0 1.8 1.46 3.25 3.25 3.25h4.63a2.25 2.25 0 010-1.5H6.25c-.97 0-1.75-.78-1.75-1.75v-11zM6 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V7zm5.5 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V7zM6 12.5a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1H7a1 1 0 01-1-1v-4zm14.28-.03a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 101.06 1.06l.22-.22v2.44c0 .97-.78 1.75-1.75 1.75h-2.44l.22-.22a.75.75 0 10-1.06-1.06l-1.5 1.5a.75.75 0 000 1.06l1.5 1.5a.75.75 0 101.06-1.06l-.22-.22h2.44c1.8 0 3.25-1.46 3.25-3.25v-2.44l.22.22a.75.75 0 101.06-1.06l-1.5-1.5z" fill={primaryFill} /></svg>;
}

const Pivot24Regular = wrapIcon(rawSvg({}), 'Pivot24Regular');
export default Pivot24Regular;
      