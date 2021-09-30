import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 3h6.04l.09.02.06.02.08.04.05.04.06.06.03.04.04.07.03.08.02.08V9.5a.5.5 0 01-1 .09V4.7L4.7 16h4.8a.5.5 0 01.5.41v.09a.5.5 0 01-.41.5H3.41l-.1-.04-.08-.04-.05-.04-.06-.06-.03-.04-.04-.07-.03-.08v-.02A.5.5 0 013 16.5v.07-6.07a.5.5 0 011-.09v4.89L15.3 4h-4.8a.5.5 0 01-.5-.41V3.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const ArrowMaximize20Regular = wrapIcon(rawSvg({}), 'ArrowMaximize20Regular');
export default ArrowMaximize20Regular;
      