import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.72 5.78a.75.75 0 101.06-1.06l-2.5-2.5a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06L11 4.56v4.19a.75.75 0 001.5 0V4.56l1.22 1.22z" fill={primaryFill} /><path d="M4 11.75c0-.41.34-.75.75-.75h14.5a.75.75 0 010 1.5H4.75a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M12.5 14.75a.75.75 0 00-1.5 0v4.69l-1.22-1.22a.75.75 0 00-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l2.5-2.5a.75.75 0 10-1.06-1.06l-1.22 1.22v-4.69z" fill={primaryFill} /></svg>;
}

const ArrowMaximizeVertical24Regular = wrapIcon(rawSvg({}), 'ArrowMaximizeVertical24Regular');
export default ArrowMaximizeVertical24Regular;
      