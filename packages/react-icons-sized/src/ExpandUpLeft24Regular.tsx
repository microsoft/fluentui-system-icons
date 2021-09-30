import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 3.75a.75.75 0 00-.75-.75h-6.5a.75.75 0 00-.75.75v6.5a.75.75 0 001.5 0V5.56l5.22 5.22a.75.75 0 001.06-1.06L5.56 4.5h4.7c.4 0 .74-.34.74-.75zm8.5 2.5c0-.97-.78-1.75-1.75-1.75h-4a.75.75 0 110-1.5h4C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.45 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75v-4a.75.75 0 011.5 0v4c0 .97.78 1.75 1.75 1.75H12v-4.75A2.75 2.75 0 0114.75 12h4.75V6.25zm0 7.25h-4.75c-.69 0-1.25.56-1.25 1.25v4.75h4.25c.97 0 1.75-.78 1.75-1.75V13.5z" fill={primaryFill} /></svg>;
}

const ExpandUpLeft24Regular = wrapIcon(rawSvg({}), 'ExpandUpLeft24Regular');
export default ExpandUpLeft24Regular;
      