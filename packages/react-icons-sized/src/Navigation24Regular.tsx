import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 18h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h18.6-18.5zm0-6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.49h18.6-18.5zm0-6.5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.49h18.6-18.5z" fill={primaryFill} /></svg>;
}

const Navigation24Regular = wrapIcon(rawSvg({}), 'Navigation24Regular');
export default Navigation24Regular;
      