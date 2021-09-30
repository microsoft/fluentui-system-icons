import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z" fill={primaryFill} /><path d="M14 16.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z" fill={primaryFill} /><path d="M11.75 22a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" fill={primaryFill} /></svg>;
}

const MoreVertical28Regular = wrapIcon(rawSvg({}), 'MoreVertical28Regular');
export default MoreVertical28Regular;
      