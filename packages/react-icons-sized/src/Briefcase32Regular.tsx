import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 3a1 1 0 00-1 1v5H8a5 5 0 00-5 5v9a5 5 0 005 5h16a5 5 0 005-5v-9a5 5 0 00-5-5h-2V4a1 1 0 00-1-1H11zm9 6h-8V5h8v4zM8 11h16a3 3 0 013 3v9a3 3 0 01-3 3H8a3 3 0 01-3-3v-9a3 3 0 013-3z" fill={primaryFill} /></svg>;
}

const Briefcase32Regular = wrapIcon(rawSvg({}), 'Briefcase32Regular');
export default Briefcase32Regular;
      