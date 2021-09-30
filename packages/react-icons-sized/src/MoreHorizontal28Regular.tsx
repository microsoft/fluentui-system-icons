import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.25 14a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" fill={primaryFill} /><path d="M16.25 14a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" fill={primaryFill} /><path d="M22 16.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" fill={primaryFill} /></svg>;
}

const MoreHorizontal28Regular = wrapIcon(rawSvg({}), 'MoreHorizontal28Regular');
export default MoreHorizontal28Regular;
      