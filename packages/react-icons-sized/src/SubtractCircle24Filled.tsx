import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm-4.25 9.25a.75.75 0 00-.1 1.5h8.6a.75.75 0 00.1-1.5h-8.6z" fill={primaryFill} /></svg>;
}

const SubtractCircle24Filled = wrapIcon(rawSvg({}), 'SubtractCircle24Filled');
export default SubtractCircle24Filled;
      