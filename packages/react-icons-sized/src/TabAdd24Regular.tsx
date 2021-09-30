import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.14 5.75A2.75 2.75 0 015.9 3h12.5a2.75 2.75 0 012.75 2.75v6.37a6.48 6.48 0 00-1.5-.76V5.75c0-.69-.56-1.25-1.25-1.25H5.9c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h5.42c.18.53.42 1.04.71 1.5H5.9a2.75 2.75 0 01-2.75-2.75V5.75z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 110-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 110 1H18z" fill={primaryFill} /></svg>;
}

const TabAdd24Regular = wrapIcon(rawSvg({}), 'TabAdd24Regular');
export default TabAdd24Regular;
      