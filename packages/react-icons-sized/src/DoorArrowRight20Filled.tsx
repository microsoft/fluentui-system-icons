import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2.5c-.83 0-1.5.67-1.5 1.5v12c0 .83.67 1.5 1.5 1.5h3.89a5.5 5.5 0 015.61-8.4V4c0-.83-.67-1.5-1.5-1.5H6zM8 10a1 1 0 11-2 0 1 1 0 012 0zm6.5 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm.35-2.15a.5.5 0 01-.7-.7L15.29 15H12.5a.5.5 0 010-1h2.8l-1.15-1.15a.5.5 0 01.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35l-2 2z" fill={primaryFill} /></svg>;
}

const DoorArrowRight20Filled = wrapIcon(rawSvg({}), 'DoorArrowRight20Filled');
export default DoorArrowRight20Filled;
      