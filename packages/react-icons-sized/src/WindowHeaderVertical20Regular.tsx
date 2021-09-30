import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9zM7 4h7.5c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H7V4z" fill={primaryFill} /></svg>;
}

const WindowHeaderVertical20Regular = wrapIcon(rawSvg({}), 'WindowHeaderVertical20Regular');
export default WindowHeaderVertical20Regular;
      