import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 11v2c0 .14-.11.25-.25.25H3.75A.25.25 0 013.5 13v-2A.75.75 0 002 11v2c0 .97.78 1.75 1.75 1.75h16.5c.97 0 1.75-.78 1.75-1.75v-2a.75.75 0 00-1.5 0z" fill={primaryFill} /></svg>;
}

const Spacebar24Regular = wrapIcon(rawSvg({}), 'Spacebar24Regular');
export default Spacebar24Regular;
      