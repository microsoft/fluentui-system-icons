import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.5A2.5 2.5 0 014.5 3h8a2.5 2.5 0 012.45 2H7.5A3.5 3.5 0 004 8.5v.53c-.73.08-1.42.34-2 .73V5.5zm6.56 9.94L10.12 17h5.38a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0015.5 6h-8A2.5 2.5 0 005 8.5v.53a4.5 4.5 0 013.56 6.41zM4.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 00.7-.7L7.3 15.6A3.5 3.5 0 104.5 17zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /></svg>;
}

const SlideMultipleSearch20Filled = wrapIcon(rawSvg({}), 'SlideMultipleSearch20Filled');
export default SlideMultipleSearch20Filled;
      