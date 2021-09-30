import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 14a2 2 0 100-4 2 2 0 000 4z" fill={primaryFill} /><path d="M6 12a6 6 0 1112 0 6 6 0 01-12 0zm6-4.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill={primaryFill} /><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm10-8.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17z" fill={primaryFill} /></svg>;
}

const Target24Regular = wrapIcon(rawSvg({}), 'Target24Regular');
export default Target24Regular;
      