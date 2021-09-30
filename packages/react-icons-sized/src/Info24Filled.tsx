import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 8.25a1 1 0 00-1 .88v5.74a1 1 0 002 0v-5.62l-.01-.12a1 1 0 00-1-.88zm0-3.75A1.25 1.25 0 1012 9a1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const Info24Filled = wrapIcon(rawSvg({}), 'Info24Filled');
export default Info24Filled;
      