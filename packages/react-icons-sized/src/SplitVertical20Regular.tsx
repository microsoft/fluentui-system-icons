import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2.5a.5.5 0 00-1 0v15a.5.5 0 001 0v-15zM4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h4v-1H4a1 1 0 01-1-1V6a1 1 0 011-1h4V4H4zm7 0v1h4a1 1 0 011 1v8a1 1 0 01-1 1h-4v1h4a2 2 0 002-2V6a2 2 0 00-2-2h-4z" fill={primaryFill} /></svg>;
}

const SplitVertical20Regular = wrapIcon(rawSvg({}), 'SplitVertical20Regular');
export default SplitVertical20Regular;
      