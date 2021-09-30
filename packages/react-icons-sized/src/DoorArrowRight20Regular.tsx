import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h4.26a5.5 5.5 0 01-.66-1H6a1 1 0 01-1-1V4a1 1 0 011-1h8a1 1 0 011 1v5.02c.34.03.68.1 1 .19V4a2 2 0 00-2-2H6zm2 8a1 1 0 11-2 0 1 1 0 012 0zm6.5 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm.35-2.15a.5.5 0 01-.7-.7L15.29 15H12.5a.5.5 0 010-1h2.8l-1.15-1.15a.5.5 0 01.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35l-2 2z" fill={primaryFill} /></svg>;
}

const DoorArrowRight20Regular = wrapIcon(rawSvg({}), 'DoorArrowRight20Regular');
export default DoorArrowRight20Regular;
      