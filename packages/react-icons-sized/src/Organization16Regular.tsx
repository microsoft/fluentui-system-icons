import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM5.5 3.5a2.5 2.5 0 113 2.45V7.5h2c.83 0 1.5.67 1.5 1.5v1.05a2.5 2.5 0 11-1 0V9a.5.5 0 00-.5-.5h-5A.5.5 0 005 9v1.05a2.5 2.5 0 11-1 0V9c0-.83.67-1.5 1.5-1.5h2V5.95a2.5 2.5 0 01-2-2.45zm-1 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const Organization16Regular = wrapIcon(rawSvg({}), 'Organization16Regular');
export default Organization16Regular;
      