import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 6a.5.5 0 00-.5.5v5.8l-1.65-1.65a.5.5 0 00-.7.7l2.5 2.5c.2.2.5.2.7 0l2.5-2.5a.5.5 0 00-.7-.7l-1.65 1.64V6.5A.5.5 0 0010 6zm-8 8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8zm2 1a1 1 0 01-1-1V6a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4z" fill={primaryFill} /></svg>;
}

const ShareCloseTray20Regular = wrapIcon(rawSvg({}), 'ShareCloseTray20Regular');
export default ShareCloseTray20Regular;
      