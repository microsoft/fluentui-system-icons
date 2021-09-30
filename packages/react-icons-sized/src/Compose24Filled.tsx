import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.96 13.46L21.7 3.7a1 1 0 00-1.42-1.42l-9.75 9.75-.29 1.71 1.7-.3z" fill={primaryFill} /><path d="M6.5 3A3.5 3.5 0 003 6.5v11A3.5 3.5 0 006.5 21h11a3.5 3.5 0 003.5-3.5V10a1 1 0 10-2 0v7.5c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 015 17.5v-11C5 5.67 5.67 5 6.5 5H14a1 1 0 100-2H6.5z" fill={primaryFill} /></svg>;
}

const Compose24Filled = wrapIcon(rawSvg({}), 'Compose24Filled');
export default Compose24Filled;
      