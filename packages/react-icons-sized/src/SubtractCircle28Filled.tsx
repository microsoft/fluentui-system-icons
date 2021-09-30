import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zM8.75 13.25a.75.75 0 00-.1 1.5h10.6a.75.75 0 00.1-1.5H8.75z" fill={primaryFill} /></svg>;
}

const SubtractCircle28Filled = wrapIcon(rawSvg({}), 'SubtractCircle28Filled');
export default SubtractCircle28Filled;
      