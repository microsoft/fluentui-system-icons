import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 14c.78 0 1.47.4 1.87 1H13.5a2.5 2.5 0 00-2.5 2.5v4c0 .16.02.32.04.47-2.93-.18-5.13-1.25-6.53-3.2a2.75 2.75 0 01-.5-1.6v-.92C4 15 5 14 6.24 14h11.5zM12 2a5 5 0 110 10 5 5 0 010-10zm0 15.5c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-8a1.5 1.5 0 01-1.5-1.5v-4zm10 .5a1 1 0 01-1-1h-1c0 1.1.9 2 2 2v-1zm0 2a2 2 0 00-2 2h1a1 1 0 011-1v-1zm-8-3a1 1 0 01-1 1v1a2 2 0 002-2h-1zm1 5a2 2 0 00-2-2v1a1 1 0 011 1h1zm4.25-2.5a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0z" fill={primaryFill} /></svg>;
}

const PersonMoney24Filled = wrapIcon(rawSvg({}), 'PersonMoney24Filled');
export default PersonMoney24Filled;
      