import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 1.5a.5.5 0 00-.85-.35l-2 2A.5.5 0 009 3.5v2.8l-.74.73A1 1 0 007 8a1 1 0 101.97-.26L9.7 7h2.79a.5.5 0 00.35-.15l2-2A.5.5 0 0014.5 4H12V1.5zm1.94 5.68a6 6 0 11-5.12-5.12l-.38.38A1.5 1.5 0 008 3.5 4.5 4.5 0 1012.5 8c.4 0 .78-.16 1.06-.44l.38-.38zM8 4.5A3.5 3.5 0 1011.5 8h-1.38l-.12.13A2 2 0 117.87 6L8 5.88V4.5z" fill={primaryFill} /></svg>;
}

const TargetArrow16Filled = wrapIcon(rawSvg({}), 'TargetArrow16Filled');
export default TargetArrow16Filled;
      