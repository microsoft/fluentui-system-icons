import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zm0 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm5.25 9.75a.75.75 0 010 1.5H8.75a.75.75 0 010-1.5h10.5z" fill={primaryFill} /></svg>;
}

const SubtractCircle28Regular = wrapIcon(rawSvg({}), 'SubtractCircle28Regular');
export default SubtractCircle28Regular;
      