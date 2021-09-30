import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 11.5a7.5 7.5 0 118.75 7.4V23h7.5a3.75 3.75 0 013.75 3.75v2.35a7.5 7.5 0 11-2.5 0v-2.35c0-.7-.56-1.25-1.25-1.25h-17.5c-.7 0-1.25.56-1.25 1.25v2.35a7.5 7.5 0 11-2.5 0v-2.35A3.75 3.75 0 0115.25 23h7.5v-4.1a7.5 7.5 0 01-6.25-7.4z" fill={primaryFill} /></svg>;
}

const Organization48Filled = wrapIcon(rawSvg({}), 'Organization48Filled');
export default Organization48Filled;
      