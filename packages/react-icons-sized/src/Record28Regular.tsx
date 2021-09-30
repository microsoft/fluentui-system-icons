import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 21.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM14 2a12 12 0 100 24 12 12 0 000-24zM3.5 14a10.5 10.5 0 1121 0 10.5 10.5 0 01-21 0z" fill={primaryFill} /></svg>;
}

const Record28Regular = wrapIcon(rawSvg({}), 'Record28Regular');
export default Record28Regular;
      